import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookshelf, BookWithStatus } from '../../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves-edit',
  templateUrl: './bookshelves-edit.component.html',
  styleUrls: ['./bookshelves-edit.component.css']
})
export class BookshelvesEditComponent implements OnInit {
  @Output() deleteBook = new EventEmitter<BookWithStatus>();
  @Output() deleteItem = new EventEmitter<Bookshelf>();
  @Output() saveItem = new EventEmitter();
  @Input() bookshelf: Bookshelf;
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = this.bookshelf.title;
  }

  onSaveItem() {
    // TODO: add empty field validation
    this.bookshelf.title = this.title;
    this.saveItem.emit();
  }

  onCancelChanges() {
    this.saveItem.emit();
  }

  onDeleteItem() {
    this.deleteItem.emit(this.bookshelf);
  }

  onDeleteBook(book: BookWithStatus) {
    this.deleteBook.emit(book);
  }

}
