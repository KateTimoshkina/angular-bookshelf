import * as firebase from 'firebase';

export class AuthService {
  user: firebase.User;
  token: string;

  constructor() { }

  singIn(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (user: firebase.User) => {
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
          this.user = user;
          console.log(this.user);
        }
      )
      .catch(
        (error: firebase.FirebaseError) => console.log(error)
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

  getUid(): string {
    return this.user.uid;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

}
