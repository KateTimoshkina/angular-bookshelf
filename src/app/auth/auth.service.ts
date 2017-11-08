import { Injectable } from '@angular/core';
import { API_SERVER, API_URL_PATH } from '../shared/constants/url-constants';
import { ApiService } from '../shared/services/api.service';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user.model';
import { RequestBuilder } from '../shared/services/request-builder';

@Injectable()
export class AuthService {
  user: User;
  roles: Array<number>;

  constructor(private apiService: ApiService) { }

  signIn(username: string, password: string): Observable<void> {
    let body = {
      username: username,
      password: password
    };

    let request = new RequestBuilder(API_SERVER)
      .withMethod('post')
      .withPath('auth/login/')
      .withBody(body);

    return this.apiService.performRequest(request)
      .map(
        response => {
          this.user = new User(response.payload);
        }
      )
      .catch(error => Observable.throw(error))
      .share();
  }

  signUp(username: string, password: string): Observable<void> {
    let body = {
      username: username,
      password: password
    };

    let request = new RequestBuilder(API_SERVER)
      .withMethod('post')
      .withPath('auth/sign_up/')
      .withBody(body);

    return this.apiService.performRequest(request)
      .map(
        response => {
          this.user = new User(response.payload);
        }
      )
      .catch(error => Observable.throw(error))
      .share();
  }

  logout(): Observable<void> {
    let request = new RequestBuilder(API_SERVER)
      .withMethod('get')
      .withPath('auth/logout/');

    return this.apiService.performRequest(request)
      .map(
        () => {
          this.user = null;
        }
      )
      .catch(error => Observable.throw(error))
      .share();
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }

  getUserId(): string {
    return this.user.id;
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

}
