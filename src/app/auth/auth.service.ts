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

  isAuthenticated(): boolean {
    return !!this.user;
  }

  // TODO: move to user component
  updateUserProfileInfo(profileData: any): Observable<Response> {
    const endPoint = API_URL_PATH.users + this.user.id + '/';
    return this.apiService.patch(endPoint, profileData);
  }

  // TODO: move to user component
  updateUserProfileImage(image: any): Observable<Response> {
    const endPoint = API_URL_PATH.users + this.user.id + '/' + API_URL_PATH.userImage;
    const headers = new Headers();
    headers.set('Content-Type', 'application/octet-stream');
    headers.set('Upload-Content-Type', image.type);
    const options = new RequestOptions({
      headers: headers
    });
    return this.apiService.post(endPoint, image, options);
  }

}
