import { Component, OnInit } from '@angular/core';
import { Reader } from '../../shared/models/reader.model';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { Bookshelf } from '../../shared/models/bookshelf.model';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
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
        },
        (error) => {
          console.error(error);
        }
      );
  }

  saveUserBookshelves(bookshelves: Bookshelf[]): void {
    const userId = this.reader.id;
    this.dsService.storeUserBookshelves(userId, bookshelves)
      .subscribe(
        () => console.log('bookshelves updated successfully')
      );
  }

  onEdit() {
    this.isEditable = true;
  }

  onSave(reader: Reader) {
    this.reader = reader;
    const profile = {
      displayName: this.reader.fullName,
      photoURL: this.reader.imageUrl
    };
    this.authService.updatedUserProfile(profile)
      .then(
        () => {
          this.onCancel();
        })
      .catch(
        (error) => console.error(error)
      )
    ;
  }

  onCancel() {
    this.isEditable = false;
  }

}
