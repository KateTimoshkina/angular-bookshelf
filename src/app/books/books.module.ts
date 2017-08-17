import { NgModule } from '@angular/core';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksItemComponent } from './books-list/books-item/books-item.component';
import { BooksDetailedComponent } from './books-detailed/books-detailed.component';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'books',
    pathMatch: 'full',
    component: BooksListComponent
  },
  {
    path: 'book/:bookId',
    component: BooksDetailedComponent
  }
];

@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent,
    BooksItemComponent,
    BooksDetailedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class BooksModule {

}
