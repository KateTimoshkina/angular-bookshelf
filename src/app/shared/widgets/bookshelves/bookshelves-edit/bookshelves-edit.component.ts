import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookshelf } from '../../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves-edit',
  templateUrl: './bookshelves-edit.component.html',
  styleUrls: ['./bookshelves-edit.component.css']
})
export class BookshelvesEditComponent implements OnInit {
  @Output() saveItem = new EventEmitter();
  @Input() bookshelf: Bookshelf;

  constructor() { }

  ngOnInit() {
  }

  onSaveItem() {
    this.bookshelf.title += '1';
    this.saveItem.emit();
  }

}
