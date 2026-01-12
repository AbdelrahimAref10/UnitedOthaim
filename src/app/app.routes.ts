import { Routes } from '@angular/router';
import { homeRoutes } from './features/home/home.routes';

export const routes: Routes = [
  ...homeRoutes,
  // Keep sectors route for "View All" button
  {
    path: 'sectors',
    loadChildren: () => import('./features/sectors/sectors.routes').then(m => m.sectorsRoutes)
  },
  // Redirect old routes to home with fragments for smooth scroll
  {
    path: 'about',
    redirectTo: '/#about'
  },
  {
    path: 'clients',
    redirectTo: '/#clients'
  },
  {
    path: 'team',
    redirectTo: '/#team'
  },
  {
    path: 'contact',
    redirectTo: '/#contact'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
