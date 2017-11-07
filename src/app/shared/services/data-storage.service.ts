import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from '../../auth/auth.service';
import { BooksService } from '../../books/books.service';
import { AuthorsService } from '../../authors/authors.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Author } from '../models/author.model';
import { Book } from '../models/book.model';
import { Bookshelf } from '../models/bookshelf.model';
import { API_URL_PATH } from '../constants/url-constants';
import { USER_ROLES } from '../constants/constants';

@Injectable()
export class DataStorageService {

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private booksService: BooksService,
              private authorsService: AuthorsService) {
  }

  getAuthor(id): Observable<Response> {
    return this.apiService.get(API_URL_PATH.authors + id + '/');
  }

  getBook(id): Observable<Response> {
    return this.apiService.get(API_URL_PATH.books + id + '/');
  }

  loadAuthors(): void {
    this.apiService.get(API_URL_PATH.authors)
      .subscribe(
        (response: Response) => {
          const data = response.json();
          const rawAuthors: Array<any> = data.payload;
          this.authorsService.setAuthors(
            rawAuthors.map((item: any) => new Author(item))
          );
        },
        (error) => console.log(error)
      );
  }

  // TODO: change to storing only one author
  storeAuthors(): Observable<Response> {
    if (this.authService.roles.indexOf(USER_ROLES.PUBLISHER)) {
      return this.apiService.put(API_URL_PATH.authors, this.authorsService.getAuthors());
    }
  }

  loadBooks(): void {
    this.apiService.get(API_URL_PATH.books)
      .subscribe(
        (response: Response) => {
          const data = response.json();
          const rawBooks: Array<any> = data.payload;
          this.booksService.setBooks(
            rawBooks.map((item: any) => new Book(item))
          );
        },
        (error) => console.log(error)
      );
  }

  // TODO: change to storing only one book
  storeBooks(): Observable<Response> {
    if (this.authService.user.groups.indexOf(USER_ROLES.PUBLISHER) > -1) {
      return this.apiService.put(API_URL_PATH.books, this.booksService.getBooks());
    }
  }

  loadUserBookshelves(userId: string): Observable<Response> {
    if (this.authService.user.groups.indexOf(USER_ROLES.READER) > -1) {
      const endPoint = API_URL_PATH.users + userId + '/' + API_URL_PATH.bookshelves;
      return this.apiService.get(endPoint);
    }
  }

  // TODO: change to storing only one bookshelf
  createUserBookshelf(userId: string, bookshelf: any): Observable<Response> {
    if (this.authService.user.groups.indexOf(USER_ROLES.READER) > -1) {
      const endPoint = API_URL_PATH.users + userId + '/' + API_URL_PATH.bookshelves;
      return this.apiService.post(endPoint, bookshelf);
    }
  }

}
