import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL_PATH } from '../shared/constants/url-constants';
import { ApiService } from '../shared/services/api.service';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user.model';

@Injectable()
export class AuthService {
  user: User;
  roles: Array<number>;

  constructor(private router: Router,
              private apiService: ApiService) { }

  singIn(username: string, password: string): void {
    const endPoint = API_URL_PATH.auth.logIn;
    const body = {
      username: username,
      password: password
    };
    // TODO: move to separate service
    this.apiService.post(endPoint, body)
      .subscribe(
        (response: Response) => {
          if (response.status === 200) {
            const rawData = response.json();
            this.setUser(rawData.payload);
            this.router.navigate(['/profile']);
          } else if (response.status === 400) {
            console.log(response);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  signUp(username: string, password: string): void {
    const endPoint = API_URL_PATH.auth.logIn;
    const body = {
      username: username,
      password: password
    };
    // TODO: move to separate service
    this.apiService.post(endPoint, body)
      .subscribe(
        (response: Response) => {
          if (response.status === 200) {
            const rawData = response.json();
            this.setUser(rawData.payload);
            // TODO: set user role as READER
            this.router.navigate(['/profile']);
          } else if (response.status === 400) {
            console.log(response);
          }
          this.router.navigate(['/']);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  logout(): void {
    const endPoint = API_URL_PATH.auth.logOut;
    this.apiService.get(endPoint);
    this.user = null;
  }

  getUser(): User {
    return this.user;
  }

  setUser(rawUser: any): void {
    this.user = new User(rawUser);
  }

  // TODO: move to data storage
  updateUserProfileInfo(profileData: any): Observable<Response> {
    const endPoint = API_URL_PATH.users + this.user.id + '/';
    return this.apiService.patch(endPoint, profileData);
  }

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

  isAuthenticated(): boolean {
    return !!this.user;
  }

}
