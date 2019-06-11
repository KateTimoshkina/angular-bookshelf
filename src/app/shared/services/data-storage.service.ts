import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from '../../auth/auth.service';
import { BooksService } from '../../books/books.service';
import { AuthorsService } from '../../authors/authors.service';
import { Observable } from 'rxjs/Observable';
import { Author } from '../models/author.model';
import { Book } from '../models/book.model';
import { API_SERVER } from '../constants/url-constants';
import { USER_ROLES } from '../constants/constants';
import { RequestBuilder } from './request-builder';

@Injectable()
export class DataStorageService {

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private booksService: BooksService,
              private authorsService: AuthorsService) {
  }

  getAuthor(authorId: string): Observable<Author> {
    let pathParams = {
      id: authorId
    };

    let request = new RequestBuilder(API_SERVER)
      .withMethod('get')
      .withPath('authors/:id/')
      .withPathParams(pathParams);

    return this.apiService.performRequest<Author>(request);
  }

  loadAuthors(): void {
    let request = new RequestBuilder(API_SERVER)
      .withMethod('get')
      .withPath('authors/');

    this.apiService.performRequest<Array<Author>>(request)
      .subscribe((response: Array<Author>) => {
          this.authorsService.setAuthors(
            response.map((item: any) => new Author(item))
          );
        },
        (error) => console.log(error)
      );
  }

  // TODO: change to storing only one author
  storeAuthors(): any {
    if (this.authService.roles.indexOf(USER_ROLES.PUBLISHER)) {
      // TODO: implement PUT 'authors/'
    }
  }

  getBook(bookId): Observable<Book> {
    let pathParams = {
      id: bookId
    };

    let request = new RequestBuilder(API_SERVER)
      .withMethod('get')
      .withPath('books/:id/')
      .withPathParams(pathParams);

    return this.apiService.performRequest<Book>(request);
  }

  loadBooks(): void {
    let request = new RequestBuilder(API_SERVER)
      .withMethod('get')
      .withPath('books/');

    this.apiService.performRequest<Array<Book>>(request)
      .subscribe((response: Array<Book>) => {
          this.booksService.setBooks(
            response.map((item: any) => new Book(item))
          );
        },
        (error) => console.log(error)
      );
  }

  // TODO: change to storing only one book
  storeBooks(): any {
    if (this.authService.user.groups.indexOf(USER_ROLES.PUBLISHER) > -1) {
      // TODO: implement PUT 'books/'
    }
  }

}
