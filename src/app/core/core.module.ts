import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from './custom-material.module';
import { BooksService } from '../books/books.service';
import { AuthorsService } from '../authors/authors.service';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CustomMaterialModule
  ],
  exports: [
    CustomMaterialModule
  ],
  providers: [
    BooksService,
    AuthorsService
  ]
})
export class CoreModule {

}
