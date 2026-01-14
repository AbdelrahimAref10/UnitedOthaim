import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export type Language = 'ar' | 'en';

interface TranslationData {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private translations: Map<string, TranslationData> = new Map();
  private currentLanguage = signal<Language>('en');
  
  public readonly currentLang = this.currentLanguage.asReadonly();
  public readonly isRTL = computed(() => this.currentLanguage() === 'ar');

  private http = inject(HttpClient);

  constructor() {
    // Set initial document attributes
    const initialLang = this.currentLanguage();
    document.documentElement.lang = initialLang;
    document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';
    
    // Load default language on init
    this.loadLanguage(initialLang).subscribe({
      next: () => {
        // Translations loaded
      },
      error: (err) => {
        console.error('Failed to load translations:', err);
      }
    });
    
    // Effect to update document direction when language changes
    effect(() => {
      const lang = this.currentLanguage();
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    });
  }

  /**
   * Load translations for a specific language
   */
  loadLanguage(lang: Language): Observable<void> {
    const translationFiles = ['common', 'home', 'about', 'sectors', 'clients', 'team', 'contact'];
    
    // Use relative path (without leading slash) so it respects base href
    // This works both locally (base href="/") and on GitHub Pages (base href="/UnitedOthaim/")
    const loadPromises = translationFiles.map(file => 
      this.http.get<TranslationData>(`assets/i18n/${lang}/${file}.json`).pipe(
        map(data => ({ file, data })),
        catchError((error) => {
          console.warn(`Failed to load translation file: ${file}.json for language: ${lang}`, error);
          console.warn(`Attempted path: assets/i18n/${lang}/${file}.json`);
          return of({ file, data: {} });
        })
      ).toPromise()
    );

    return new Observable(observer => {
      Promise.all(loadPromises).then(results => {
        results.forEach(result => {
          if (result) {
            this.translations.set(`${lang}.${result.file}`, result.data);
          }
        });
        observer.next();
        observer.complete();
      }).catch(error => {
        observer.error(error);
      });
    });
  }

  /**
   * Switch to a different language
   */
  setLanguage(lang: Language): void {
    if (this.currentLanguage() !== lang) {
      this.currentLanguage.set(lang);
      this.loadLanguage(lang).subscribe();
    }
  }

  /**
   * Get translation by key
   * Supports nested keys like 'nav.home' or 'hero.title'
   */
  translate(key: string, params?: { [key: string]: string }): string {
    const lang = this.currentLanguage();
    
    // If no translations loaded yet, return key
    if (this.translations.size === 0) {
      return key;
    }
    
    const [namespace, ...keyParts] = key.split('.');
    
    // Special handling for nav.* keys - always check common.json first
    if (namespace === 'nav') {
      const common = this.translations.get(`${lang}.common`);
      if (common) {
        const value = this.getNestedValue(common, key);
        if (value && typeof value === 'string') {
          return this.interpolate(value, params);
        }
      }
    }
    
    // Try to find translation in namespace files
    const translationFiles = ['common', 'home', 'about', 'sectors', 'clients', 'team', 'contact'];
    
    // First, try to find in the namespace file (if namespace matches a file)
    if (translationFiles.includes(namespace)) {
      const translation = this.translations.get(`${lang}.${namespace}`);
      if (translation) {
        const value = this.getNestedValue(translation, keyParts.join('.'));
        if (value && typeof value === 'string') {
          return this.interpolate(value, params);
        }
      }
    }
    
    // Fallback: search in all files (but skip if we already checked common for nav keys)
    if (namespace !== 'nav') {
      for (const file of translationFiles) {
        const translation = this.translations.get(`${lang}.${file}`);
        if (translation) {
          const value = this.getNestedValue(translation, keyParts.join('.'));
          if (value && typeof value === 'string') {
            return this.interpolate(value, params);
          }
        }
      }
    }

    // Final fallback: try direct key lookup in common
    const common = this.translations.get(`${lang}.common`);
    if (common) {
      const value = this.getNestedValue(common, key);
      if (value && typeof value === 'string') {
        return this.interpolate(value, params);
      }
    }

    return key; // Return key if translation not found
  }

  /**
   * Get nested value from object using dot notation
   */
  private getNestedValue(obj: any, path: string): string | null {
    return path.split('.').reduce((current, key) => current?.[key] ?? null, obj);
  }

  /**
   * Interpolate parameters in translation string
   */
  private interpolate(text: string, params?: { [key: string]: string }): string {
    if (!params) return text;
    
    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return params[key] ?? match;
    });
  }

  /**
   * Get current language code
   */
  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }
}
