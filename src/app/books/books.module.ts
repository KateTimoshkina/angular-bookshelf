import { NgModule } from '@angular/core';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailedComponent } from './books-detailed/books-detailed.component';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

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
    BooksDetailedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: []
})
export class BooksModule {

}
