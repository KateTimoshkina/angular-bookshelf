import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(appRoutes),
    BooksModule,
    AuthorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
