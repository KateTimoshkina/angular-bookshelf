import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DataStorageService } from './shared/services/data-storage.service';
import { AuthService } from './auth/auth.service';
import { FIREBASE_CONFIG } from './shared/constants/configs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dsService: DataStorageService,
              private authService: AuthService) {
  }

  ngOnInit() {
    // Initialize Firebase
    firebase.initializeApp(FIREBASE_CONFIG);

    // Check if user is logged in
    this.authService.checkTokenInLocalStorage();

    // Loading data from server
    this.dsService.loadBooks();
    this.dsService.loadAuthors();
  }
}
