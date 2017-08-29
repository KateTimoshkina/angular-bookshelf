import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookshelf } from '../../../models/bookshelf.model';
import { BookWithStatus } from '../../../models/book-with-status.model';
import { BOOK_STATUS } from '../../../constants/constants';

@Component({
  selector: 'app-bookshelves-edit',
  templateUrl: './bookshelves-edit.component.html',
  styleUrls: ['./bookshelves-edit.component.css']
})
export class BookshelvesEditComponent implements OnInit {
  @Output() saveItem = new EventEmitter();
  @Input() bookshelf: Bookshelf;
  statuses = BOOK_STATUS;
  _bookshelf: Bookshelf;

  constructor() { }

  ngOnInit() {
    this._bookshelf = this.bookshelf.clone();
  }

  onSaveItem() {
    // TODO: add empty field validation
    this.bookshelf.title = this._bookshelf.title;
    this.bookshelf.books = this._bookshelf.books;
    this.saveItem.emit();
  }

  onCancelChanges() {
    this.saveItem.emit();
  }

  onDeleteBook(item: BookWithStatus) {
    // TODO: add confirmation
    const index = this._bookshelf.books.indexOf(item);
    this._bookshelf.books.splice(index, 1);
  }

}
