import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { RequestBuilder } from '../shared/services/request-builder';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { API_SERVER } from '../shared/constants/url-constants';
import { Dictionary } from '../shared/types';
import { User } from '../shared/models/user.model';

@Injectable()
export class UsersService implements OnInit {
  userId: string;

  constructor(private apiService: ApiService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.userId = this.authService.getUserId();
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

    return this.apiService.performRequest(request)
      .map(
        response => {
          let user = new User(response.payload);
          this.authService.setUser(user);
        }
      )
      .catch(
        error => Observable.throw(error)
      )
      .share();
  }

  updateUserProfileImage(image: any): Observable<void> {
    let pathParams = {
      id: this.userId
    };

    let extraHeaders = {
      'Content-Type': 'application/octet-stream',
      'Upload-Content-Type': image.type
    };

    let request = new RequestBuilder(API_SERVER)
      .withMethod('post')
      .withPath('users/:id/image/')
      .withPathParams(pathParams)
      .withExtraHeaders(extraHeaders);

    return this.apiService.performRequest(request)
      .map(
        response => {
          let user = new User(response.payload);
          this.authService.setUser(user);
        }
      )
      .catch(
        error => Observable.throw(error)
      )
      .share();
  }
}
