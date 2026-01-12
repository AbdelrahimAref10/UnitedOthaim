import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  appName: string;
  defaultLanguage: 'ar' | 'en';
  defaultTheme: 'light' | 'dark';
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
