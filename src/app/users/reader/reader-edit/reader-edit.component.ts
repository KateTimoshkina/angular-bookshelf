import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reader } from '../../../shared/models/reader.model';

@Component({
  selector: 'app-reader-edit',
  templateUrl: './reader-edit.component.html',
  styleUrls: ['./reader-edit.component.css']
})
export class ReaderEditComponent implements OnInit {
  @Output() cancelChanges = new EventEmitter();
  @Output() saveChanges = new EventEmitter();
  @Input() reader: Reader;
  _reader: Reader = null;

  constructor() { }

  ngOnInit() {
    this._reader = this.reader;
  }

  onSave() {
    const profile = {
      displayName: this._reader.fullName,
      photoURL: this._reader.imageUrl
    };
    this.saveChanges.emit(profile);
  }

  onCancel() {
    this.cancelChanges.emit();
  }

}
