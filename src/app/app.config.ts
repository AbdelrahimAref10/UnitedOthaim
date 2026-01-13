import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { coreProviders } from './core/core.providers';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';  // your main routes
import { sectorsRoutes } from './features/sectors/sectors.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    ...coreProviders,
    provideRouter(
      [
        ...routes,
        ...sectorsRoutes, 
      ],
      withHashLocation() 
    ),
  ],
};
