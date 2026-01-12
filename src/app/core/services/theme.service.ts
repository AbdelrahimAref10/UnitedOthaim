import { Injectable, signal, computed, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = signal<Theme>(this.getInitialTheme());
  
  public readonly currentTheme = this.theme.asReadonly();
  public readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    // Apply theme on initialization
    this.applyTheme(this.theme());
    
    // Effect to apply theme changes to document
    effect(() => {
      this.applyTheme(this.theme());
    });
  }

  /**
   * Get initial theme from localStorage or system preference
   */
  private getInitialTheme(): Theme {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }

  /**
   * Toggle between light and dark theme
   */
  toggleTheme(): void {
    this.setTheme(this.theme() === 'light' ? 'dark' : 'light');
  }

  /**
   * Set theme explicitly
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
    localStorage.setItem('theme', theme);
  }

  /**
   * Apply theme to document
   */
  private applyTheme(theme: Theme): void {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  /**
   * Get current theme
   */
  getCurrentTheme(): Theme {
    return this.theme();
  }
}
