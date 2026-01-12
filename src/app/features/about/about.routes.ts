import { Routes } from '@angular/router';
import { AboutPage } from './pages/about.page';
import { VisionPage } from './pages/vision.page';

export const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutPage
  },
  {
    path: 'vision',
    component: VisionPage
  }
];
