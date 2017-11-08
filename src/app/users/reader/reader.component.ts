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
    this.isEditable = false;
    this.usersService.buildReader()
      .subscribe(
        (reader: Reader) => {
          this.reader = reader;
        },
        error => console.log(error)
      );
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
