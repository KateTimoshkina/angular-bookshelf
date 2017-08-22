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

  loadAuthors() {
    const token = this.authService.getToken();
    this.apiService.get('authors', token)
      .subscribe(
        (response: Response) => {
          // this.authorsService.setAuthors();
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  storeAuthors() {
    const token = this.authService.getToken();
    this.apiService.put('authors', this.authorsService.getAuthors(), token)
      .subscribe(
        () => console.log('got authors from server'),
        () => console.log('error occurred')
      );
  }

}
