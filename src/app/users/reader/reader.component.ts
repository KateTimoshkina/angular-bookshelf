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
    const authUser = this.authService.getUser();
    const rawReader = {
      id: authUser.uid,
      fullName: authUser.displayName,
      login: authUser.email,
      imageUrl: authUser.photoURL,
      bookshelves: []
    };
    this.reader = new Reader(rawReader);
    console.log(this.reader.id);
  }

}
