import { Routes } from '@angular/router';
import { PortfolioPage } from './portfolio/portfolio';
import { NotFoundPage } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: PortfolioPage },
  { path: '**', component: NotFoundPage },
];
