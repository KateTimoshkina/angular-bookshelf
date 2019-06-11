import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { RequestBuilder } from '../shared/services/request-builder';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { API_SERVER } from '../shared/constants/url-constants';
import { Dictionary } from '../shared/types';
import { User } from '../shared/models/user.model';
import { Reader } from '../shared/models/reader.model';
import { Bookshelf } from '../shared/models/bookshelf.model';
import { Book } from '../shared/models/book.model';

@Injectable()
export class UsersService {
  userId: string;

  constructor(private apiService: ApiService,
              private authService: AuthService) {
    this.userId = this.authService.user.id;
  }

  updateUserProfileInfo(profileData: Dictionary<string>): Observable<void> {
    let pathParams = {
      id: this.userId
    };

    let request = new RequestBuilder(API_SERVER)
      .withMethod('patch')
      .withPath('users/:id/')
      .withPathParams(pathParams)
      .withBody(profileData);

    return this.apiService.performRequest<User>(request)
      .map(
        (response: User) => {
          this.authService.user = new User(response);
        }
      )
      .catch(
        error => Observable.throw(error)
      )
      .share();
  }

  buildReader(): Observable<Reader> {
    let reader = this.authService.user;
    return this.loadUserBookshelves()
      .map(
        (rawBookshelves) => {
          reader['bookshelves'] = rawBookshelves;
          return new Reader(reader);
        },
      )
      .catch(
        error => Observable.throw(error)
      )
      .share();
  }

  loadUserBookshelves(): Observable<Dictionary<any>> {
    let pathParams = {
      id: this.userId
    };

    let request = new RequestBuilder(API_SERVER)
      .withMethod('get')
      .withPath('users/:id/bookshelves/')
      .withPathParams(pathParams);

    return this.apiService.performRequest<Array<Bookshelf>>(request)
      .map(
        (response: Array<Bookshelf>) => {
          return response;
        }
      )
      .catch(
        error => Observable.throw(error)
      )
      .share();
  }

  createUserBookshelf(bookshelf: Bookshelf) {
    // TODO: POST users/{user_id}/bookshelves/
  }

  updateBookshelfInfo(bookshelf: Bookshelf) {
    // TODO: PUT bookshelves/{bookshelf_id}/
  }

  updateBookshelfBooks(id: string, books: Book[]) {
    // TODO: DELETE bookshelves/{bookshelf_id}/books/
  }

}
