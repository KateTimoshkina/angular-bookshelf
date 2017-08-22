import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: firebase.User;
  token: string;

  constructor(private router: Router) { }

  singIn(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (user: firebase.User) => {
          firebase.auth().currentUser.getToken()
            .then((token: string) => this.token = token);
          this.user = user;
          this.router.navigate(['/profile']);
        }
      )
      .catch(
        (error: firebase.FirebaseError) => {
          console.log(error);
          this.router.navigate(['/']);
        }
      );
  }

  signUp(email: string, password: string): void {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (user: firebase.User) => console.log(user)
      )
      .catch(
        (error: firebase.FirebaseError) => console.log(error)
      );
  }

  logout(): void {
    firebase.auth().signOut();
    this.token = null;
    this.user = null;
  }

  getToken(): string {
    firebase.auth().currentUser.getToken()
      .then((token: string) => this.token = token)
      .catch(error => console.log(error));
    return this.token;
  }

  getUser(): firebase.User {
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

}
