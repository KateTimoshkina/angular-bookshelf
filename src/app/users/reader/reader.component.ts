import { Component, OnInit } from '@angular/core';
import { Reader } from '../../shared/models/reader.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  reader: Reader = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // build reader from  firebase.user
    // get user's bookshelves from firebase using user's uid
  }

}
