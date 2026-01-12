import { Routes } from '@angular/router';
import { SectorsListPage } from './pages/sectors-list.page';
import { SectorDetailPage } from './pages/sector-detail.page';

export const sectorsRoutes: Routes = [
  {
    path: '',
    component: SectorsListPage
  },
  {
    path: ':id',
    component: SectorDetailPage
  }
];
