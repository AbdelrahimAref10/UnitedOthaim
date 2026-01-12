import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { coreProviders } from './core/core.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    ...coreProviders
  ]
};
