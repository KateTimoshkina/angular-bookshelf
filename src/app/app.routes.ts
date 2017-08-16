import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'book', component: BooksComponent},
  {path: 'author', component: AuthorsComponent},
  {path: '**', redirectTo: '/not-found'},
  {path: 'not-found', component: PageNotFoundComponent}
];
