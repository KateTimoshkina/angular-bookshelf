import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookshelf, BookWithStatus } from '../../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves-edit',
  templateUrl: './bookshelves-edit.component.html',
  styleUrls: ['./bookshelves-edit.component.css']
})
export class BookshelvesEditComponent implements OnInit {
  @Output() deleteItem = new EventEmitter<Bookshelf>();
  @Output() saveItem = new EventEmitter();
  @Input() bookshelf: Bookshelf;
  _bookshelf: Bookshelf;

  constructor() { }

  ngOnInit() {
    this._bookshelf = this.bookshelf.copy();
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

  onDeleteItem() {
    this.deleteItem.emit(this.bookshelf);
  }

  onDeleteBook(item: BookWithStatus) {
    // TODO: add confirmation
    const index = this._bookshelf.books.indexOf(item);
    this._bookshelf.books.splice(index, 1);
  }

}
