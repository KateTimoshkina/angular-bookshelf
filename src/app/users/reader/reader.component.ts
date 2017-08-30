import { Component, OnInit } from '@angular/core';
import { Reader } from '../../shared/models/reader.model';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { Bookshelf } from '../../shared/models/bookshelf.model';
import { config } from '../../shared/constants/configs';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  _reader: Reader = null;
  reader: Reader = null;
  isEditable: boolean;

  constructor(private authService: AuthService,
              private dsService: DataStorageService) {
  }

  ngOnInit() {
    this.isEditable = false;
    const authUser = this.authService.getUser();
    const userUid = authUser.uid;
    const rawReader = {
      id: userUid,
      fullName: authUser.displayName,
      login: authUser.email,
      imageUrl: authUser.photoURL,
      bookshelves: []
    };
    this.dsService.loadUserBookshelves(userUid)
      .subscribe(
        (response) => {
          rawReader.bookshelves = response.json();
          this.reader = new Reader(rawReader);
          this._reader = this.reader.clone();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  deleteUserBookshelf(bookshelf: Bookshelf): void {
    const index = this.reader.bookshelves.indexOf(bookshelf);
    this.reader.bookshelves.splice(index, 1);
  }

  addUserBookshelf(): void {
    const bookshelf = new Bookshelf({
      id: this.dsService.generateUid(2),
      title: config.BOOKSHELF_DEFAULT_TITLE
    });
    this.reader.bookshelves.push(bookshelf);
  }

  onEdit() {
    this.isEditable = true;
  }

  onSave() {
    // TODO: save updated data to firebase
    this.reader = this._reader;
    this.isEditable = false;
  }

  onCancel() {
    this.isEditable = false;
  }

}
