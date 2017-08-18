import { NgModule } from '@angular/core';
import { AuthorsItemComponent } from './components/authors-item/authors-item.component';
import { BooksItemComponent } from './components/books-item/books-item.component';
import { RouterModule } from '@angular/router';
import { BookshelvesModule } from './widgets/bookshelves/bookshelves.module';

@NgModule({
  imports: [
    RouterModule,
    BookshelvesModule
  ],
  declarations: [
    AuthorsItemComponent,
    BooksItemComponent
  ],
  exports: [
    AuthorsItemComponent,
    BooksItemComponent,
    BookshelvesModule
  ]
})
export class SharedModule {

}
