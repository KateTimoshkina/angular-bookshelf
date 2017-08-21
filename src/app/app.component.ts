import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAscJAn5Ke6Z_94xbUZI8jpu0p5SojDgcs",
      authDomain: "bookshelf-test-project-7fed0.firebaseapp.com",
      databaseURL: "https://bookshelf-test-project-7fed0.firebaseio.com",
      projectId: "bookshelf-test-project-7fed0",
      storageBucket: "bookshelf-test-project-7fed0.appspot.com",
      messagingSenderId: "192819524683"
    };
    firebase.initializeApp(config);
  }
}
