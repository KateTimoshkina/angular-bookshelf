import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from './custom-material.module';
import { BooksService } from '../books/books.service';
import { AuthorsService } from '../authors/authors.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    AuthModule
  ],
  exports: [
    CustomMaterialModule,
    HeaderComponent,
    AuthModule
  ],
  providers: [
    BooksService,
    AuthorsService
  ]
})
export class CoreModule {

}
