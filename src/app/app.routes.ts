import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'sectors',
    loadChildren: () => import('./features/sectors/sectors.routes').then(m => m.sectorsRoutes)
  },
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
