import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DataStorageService } from './shared/services/data-storage.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private config = {
    apiKey: "AIzaSyAscJAn5Ke6Z_94xbUZI8jpu0p5SojDgcs",
    authDomain: "bookshelf-test-project-7fed0.firebaseapp.com",
    databaseURL: "https://bookshelf-test-project-7fed0.firebaseio.com",
    projectId: "bookshelf-test-project-7fed0",
    storageBucket: "bookshelf-test-project-7fed0.appspot.com",
    messagingSenderId: "192819524683"
  };

  constructor(private dsService: DataStorageService,
              private authService: AuthService) {
  }

  ngOnInit() {
    // Initialize Firebase
    firebase.initializeApp(this.config);

    // Check if user is logged in
    this.authService.checkTokenInLocalStorage();

    // Loading data from server
    this.dsService.loadBooks();
    this.dsService.loadAuthors();
  }
}
