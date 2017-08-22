import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from '../../auth/auth.service';
import { BooksService } from '../../books/books.service';
import { AuthorsService } from '../../authors/authors.service';
import { Response } from '@angular/http';

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
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  storeAuthors(): void {
    const token = this.authService.getToken();
    this.apiService.put('authors', this.authorsService.getAuthors(), token)
      .subscribe(
        () => console.log('got authors from server'),
        () => console.log('error occurred')
      );
  }

  loadBooks(): void {
    this.apiService.get('books')
      .subscribe(
        (response: Response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  storeBooks(): void {
    const token = this.authService.getToken();
    this.apiService.put('books', this.booksService.getBooks(), token)
      .subscribe(
        () => console.log('got books from server'),
        () => console.log('error occurred')
      );
  }

}
