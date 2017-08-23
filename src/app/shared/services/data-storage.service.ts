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

@Injectable()
export class DataStorageService {

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private booksService: BooksService,
              private authorsService: AuthorsService) { }

  loadAuthors(): void {
    this.apiService.get('authors')
      .subscribe(
        (response: Response) => {
          // this.authorsService.setAuthors();
          const rawAuthors: Array<any> = response.json();
          this.authorsService.setAuthors(
            rawAuthors.map((item: any) => new Author(item))
          );
        },
        (error) => console.log(error)
      );
  }

  storeAuthors(): Observable<Response> {
    const token = this.authService.getToken();
    return this.apiService.put('authors', this.authorsService.getAuthors(), token);
  }

  loadBooks(): void {
    this.apiService.get('books')
      .subscribe(
        (response: Response) => {
          const rawBooks: Array<any> = response.json();
          this.booksService.setBooks(
            rawBooks.map((item: any) => new Book(item))
          );
        },
        (error) => console.log(error)
      );
  }

  storeBooks(): Observable<Response> {
    const token = this.authService.getToken();
    return this.apiService.put('books', this.booksService.getBooks(), token);
  }

  loadUserBookshelves(userId: string): Observable<Response> {
    // TODO: check if user has 'reader' role
    const token = this.authService.token;
    const endPoint = 'bookshelves' + '/' + userId;
    return this.apiService.get(endPoint, token);
  }

}
