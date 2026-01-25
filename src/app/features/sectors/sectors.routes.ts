import { Routes } from '@angular/router';
import { SectorDetailPage } from './pages/sector-detail.page';

export const sectorsRoutes: Routes = [
  {
    path: '',
    redirectTo: '/#sectors',
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: SectorDetailPage
  }
];
