import { Injectable } from '@angular/core';
import { API_SERVER } from '../shared/constants/url-constants';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user.model';
import { RequestBuilder } from '../shared/services/request-builder';

@Injectable()
export class AuthService {
  _user: User;
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

    return this.apiService.performRequest<User>(request)
      .map(
        (response: User) => {
          this._user = new User(response);
        }
      )
      .catch(error => Observable.throw(error.error.service))
      .share();
  }

  logout(): Observable<void> {
    let request = new RequestBuilder(API_SERVER)
      .withMethod('get')
      .withPath('auth/logout/');

    return this.apiService.performRequest(request)
      .map(
        () => {
          this._user = null;
        }
      )
      .catch(error => Observable.throw(error))
      .share();
  }

  public get user(): User {
    return this._user;
  }

  public set user(user: User) {
    this._user = user;
  }

  isAuthenticated(): boolean {
    return !!this._user;
  }

}
