import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reader } from '../../../shared/models/reader.model';

@Component({
  selector: 'app-reader-edit',
  templateUrl: './reader-edit.component.html',
  styleUrls: ['./reader-edit.component.css']
})
export class ReaderEditComponent implements OnInit {
  @Output() cancelChanges = new EventEmitter();
  @Output() saveChanges = new EventEmitter<Reader>();
  @Input() reader: Reader;
  _reader: Reader = null;

  constructor() { }

  ngOnInit() {
    this._reader = this.reader.clone();
  }

  onSave() {
    this.saveChanges.emit(this._reader);
  }

  onCancel() {
    this.cancelChanges.emit();
  }

}
