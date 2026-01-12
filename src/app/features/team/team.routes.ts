import { Routes } from '@angular/router';
import { BoardPage } from './pages/board.page';
import { TeamPage } from './pages/team.page';

export const teamRoutes: Routes = [
  {
    path: '',
    component: TeamPage
  },
  {
    path: 'board',
    component: BoardPage
  }
];
