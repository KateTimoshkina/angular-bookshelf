import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from './custom-material.module';
import { BooksService } from '../books/books.service';
import { AuthorsService } from '../authors/authors.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    CustomMaterialModule,
    HeaderComponent
  ],
  providers: [
    BooksService,
    AuthorsService,
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {

}
