import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'author',
    component: AuthorsComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  }
];
