import { AuthorsDetailedComponent } from './authors-detailed/authors-detailed.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { Routes } from '@angular/router';
import { AuthorsComponent } from './authors.component';

export const ROUTES: Routes = [
  {
    path: 'authors',
    component: AuthorsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AuthorsListComponent
      },
      {
        path: ':authorId',
        component: AuthorsDetailedComponent
      }
    ]
  }
];
