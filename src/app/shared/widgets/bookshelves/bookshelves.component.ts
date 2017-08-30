import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookshelf } from '../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves',
  templateUrl: './bookshelves.component.html',
  styleUrls: ['./bookshelves.component.css']
})
export class BookshelvesComponent implements OnInit {
  @Output() saveBookshelves = new EventEmitter();
  @Output() deleteBookshelf = new EventEmitter<Bookshelf>();
  @Output() addBookshelf = new EventEmitter();
  @Input() bookshelves: Bookshelf[];
  selectedBookshelf: Bookshelf;
  hasChanges: boolean;
  isDetailed: boolean;
  isEditable: boolean;

  constructor() { }

  private switchMode(isEditable: boolean, isDetailed: boolean) {
    this.isDetailed = isDetailed;
    this.isEditable = isEditable;
  }

  ngOnInit() {
    this.selectedBookshelf = null;
    this.switchMode(false, false);
  }

  onItemSelected(bookshelf: Bookshelf) {
    if (this.selectedBookshelf === bookshelf) {
      this.switchMode(false, !this.isDetailed);
    } else {
      this.selectedBookshelf = bookshelf;
      this.switchMode(false, true);
    }
  }

  onAddItem() {
    this.addBookshelf.emit();
    this.selectedBookshelf = this.bookshelves[this.bookshelves.length - 1];
    this.switchMode(true, false);
    this.hasChanges = true;

  }

  onEditItem(bookshelf: Bookshelf) {
    this.selectedBookshelf = bookshelf;
    this.switchMode(true, false);
  }

  onItemChanged() {
    this.hasChanges = true;
  }

  onSaveItems() {
    this.hasChanges = false;
    this.switchMode(false, false);
    this.saveBookshelves.emit(this.bookshelves);
  }

  onSaveItem() {
    this.switchMode(false, true);
  }

  onDeleteItem(bookshelf: Bookshelf) {
    // TODO: add confirmation
    this.deleteBookshelf.emit(bookshelf);
    this.switchMode(false, false);
    this.hasChanges = true;
  }

}
