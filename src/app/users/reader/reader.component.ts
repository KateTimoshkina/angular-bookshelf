import { Component, OnInit } from '@angular/core';
import { Reader } from '../../shared/models/reader.model';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { Bookshelf } from '../../shared/models/bookshelf.model';
import { Response } from '@angular/http';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  reader: Reader = null;
  isEditable: boolean;

  constructor(private authService: AuthService,
              private usersService: UsersService,
              private dsService: DataStorageService) {
  }

  ngOnInit() {
    const me = this;
    me.isEditable = false;
    const authUser = me.authService.getUser();
    this.dsService.loadUserBookshelves(authUser.id)
      .subscribe(
        (response: Response) => {
          const rawData = response.json();
          authUser['bookshelves'] = rawData.payload;
          me.reader = new Reader(authUser);
          console.log(me.reader);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  saveUserBookshelves(bookshelves: Bookshelf[]): void {
    const userId = this.reader.id;
    // TODO: save bookshelves
    // this.dsService.storeUserBookshelves(userId, bookshelves)
    //   .subscribe(
    //     () => console.log('bookshelves saved successfully')
    //   );
  }

  onEdit() {
    this.isEditable = true;
  }

  onSave(reader: Reader) {
    this.reader = reader;
    const profileData = {
      username: this.reader.username,
      first_name: this.reader.first_name,
      last_name: this.reader.last_name,
      email: this.reader.email
    };
    // TODO: add image uploader
    this.usersService.updateUserProfileInfo(profileData)
      .subscribe(
          () => this.onCancel(),
          error => console.error(error)
        );
  }

  onCancel() {
    this.isEditable = false;
  }

}
