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
        console.log(`✓ Translations loaded for language: ${initialLang}`);
        console.log(`  Loaded ${this.translations.size} translation files`);
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
        map(data => {
          console.log(`✓ Loaded ${file}.json for ${lang}`);
          return { file, data };
        }),
        catchError((error) => {
          console.error(`✗ Failed to load translation file: ${file}.json for language: ${lang}`);
          console.error(`  Attempted path: assets/i18n/${lang}/${file}.json`);
          console.error(`  Error:`, error);
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
   * Supports nested keys like 'nav.home', 'hero.title', or 'home.team.title'
   */
  translate(key: string, params?: { [key: string]: string }): string {
    const lang = this.currentLanguage();
    
    // If no translations loaded yet, return key
    if (this.translations.size === 0) {
      return key;
    }
    
    const keyParts = key.split('.');
    const translationFiles = ['common', 'home', 'about', 'sectors', 'clients', 'team', 'contact'];
    
    // Special handling for nav.* keys - always check common.json first
    if (keyParts[0] === 'nav') {
      const common = this.translations.get(`${lang}.common`);
      if (common) {
        const value = this.getNestedValue(common, key);
        if (value && typeof value === 'string') {
          return this.interpolate(value, params);
        }
      }
    }
    
    // Strategy 1: Try namespace file first (e.g., 'home.team.title' -> look in home.json for 'team.title')
    const [namespace, ...restParts] = keyParts;
    if (translationFiles.includes(namespace)) {
      const translation = this.translations.get(`${lang}.${namespace}`);
      if (translation) {
        const value = this.getNestedValue(translation, restParts.join('.'));
        if (value && typeof value === 'string') {
          return this.interpolate(value, params);
        }
      }
    }
    
    // Strategy 2: Search in all files with the full key path
    // This handles cases like 'home.team.title' where team might be in team.json
    for (const file of translationFiles) {
      const translation = this.translations.get(`${lang}.${file}`);
      if (translation) {
        const value = this.getNestedValue(translation, key);
        if (value && typeof value === 'string') {
          return this.interpolate(value, params);
        }
      }
    }
    
    // Strategy 3: Try without namespace prefix (e.g., 'home.team.title' -> 'team.title')
    // This handles cases where the key structure doesn't match file structure
    if (keyParts.length > 1) {
      const withoutNamespace = keyParts.slice(1).join('.');
      for (const file of translationFiles) {
        const translation = this.translations.get(`${lang}.${file}`);
        if (translation) {
          const value = this.getNestedValue(translation, withoutNamespace);
          if (value && typeof value === 'string') {
            return this.interpolate(value, params);
          }
        }
      }
    }

    // Strategy 4: Try direct key lookup in common as final fallback
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
