import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  errorText: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    let username = form.value['username'];
    let password = form.value['password'];

    this.authService.signIn(username, password)
      .subscribe(
        () => {
          this.router.navigate(['/profile']);
        },
        error => {
          if (!(error.validation_errors instanceof Array)) {
            this.errorText = JSON.stringify(error.validation_errors);
          } else {
            this.errorText = error.error_message;
          }
        }
      );
  }

}
