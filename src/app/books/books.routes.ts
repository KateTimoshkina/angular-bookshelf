import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailedComponent } from './books-detailed/books-detailed.component';

export const ROUTES: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BooksListComponent
      },
      {
        path: ':bookId',
        component: BooksDetailedComponent
      }
    ]
  }
];
