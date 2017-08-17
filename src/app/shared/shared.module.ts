import { NgModule } from '@angular/core';
import { AuthorsItemComponent } from './components/authors-item/authors-item.component';
import { BooksItemComponent } from './components/books-item/books-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    AuthorsItemComponent,
    BooksItemComponent
  ],
  exports: [
    AuthorsItemComponent,
    BooksItemComponent
  ]
})
export class SharedModule {

}
