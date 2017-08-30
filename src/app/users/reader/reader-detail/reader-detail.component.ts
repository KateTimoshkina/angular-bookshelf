import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reader } from '../../../shared/models/reader.model';

@Component({
  selector: 'app-reader-detail',
  templateUrl: './reader-detail.component.html',
  styleUrls: ['./reader-detail.component.css']
})
export class ReaderDetailComponent implements OnInit {
  @Output() edit = new EventEmitter();
  @Input() reader: Reader;

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit();
  }

}
