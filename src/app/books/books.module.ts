import { NgModule } from '@angular/core';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailedComponent } from './books-detailed/books-detailed.component';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ROUTES as BooksRoutes } from './books.routes';

@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent,
    BooksDetailedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BooksRoutes),
    SharedModule
  ],
  exports: []
})
export class BooksModule {

}
