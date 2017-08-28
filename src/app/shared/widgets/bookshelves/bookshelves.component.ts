import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookshelf } from '../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves',
  templateUrl: './bookshelves.component.html',
  styleUrls: ['./bookshelves.component.css']
})
export class BookshelvesComponent implements OnInit {
  @Output() deleteBookshelf = new EventEmitter<Bookshelf>();
  @Output() addBookshelf = new EventEmitter();
  @Input() bookshelves: Bookshelf[];
  selectedBookshelf: Bookshelf;
  isDetailed = false;
  isEditable = false;

  constructor() { }

  ngOnInit() {
    this.selectedBookshelf = null;
  }

  onItemSelected(bookshelf: Bookshelf) {
    if (this.selectedBookshelf === bookshelf) {
      this.isDetailed = !this.isDetailed;
    } else {
      this.selectedBookshelf = bookshelf;
      this.isDetailed = true;
    }
  }

  onAddItem() {
    this.addBookshelf.emit();
    this.selectedBookshelf = this.bookshelves[this.bookshelves.length - 1];
    this.isEditable = true;
    this.isDetailed = false;
  }

  onEditItem(bookshelf: Bookshelf) {
    this.isDetailed = false;
    this.isEditable = true;
    this.selectedBookshelf = bookshelf;
  }

  onSaveItem() {
    this.isDetailed = true;
    this.isEditable = false;
  }

  onDeleteItem(bookshelf: Bookshelf) {
    // TODO: add confirmation
    this.deleteBookshelf.emit(bookshelf);
    this.isEditable = false;
  }

}
