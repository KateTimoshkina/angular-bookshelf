import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookshelf } from '../../models/bookshelf.model';
import { DataStorageService } from '../../services/data-storage.service';
import { config } from '../../constants/configs';

@Component({
  selector: 'app-bookshelves',
  templateUrl: './bookshelves.component.html',
  styleUrls: ['./bookshelves.component.css']
})
export class BookshelvesComponent implements OnInit {
  @Output() saveBookshelves = new EventEmitter();
  @Input() bookshelves: Bookshelf[];
  selectedBookshelf: Bookshelf;
  _bookshelves: Bookshelf[];
  hasChanges: boolean;
  isDetailed: boolean;
  isEditable: boolean;

  constructor(private dsService: DataStorageService) { }

  private switchMode(isEditable: boolean, isDetailed: boolean) {
    this.isDetailed = isDetailed;
    this.isEditable = isEditable;
  }

  ngOnInit() {
    this.selectedBookshelf = null;
    this.switchMode(false, false);
    // creating local bookshelves copy
    this._bookshelves = [];
    for (const item of this._bookshelves) {
      this._bookshelves.push(item.clone());
    }
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
    const newItem = new Bookshelf({
      id: this.dsService.generateUid(2),
      title: config.BOOKSHELF_DEFAULT_TITLE
    });
    this._bookshelves.push(newItem);
    this.selectedBookshelf = null;
    // TODO: check for changes
    this.checkForChanges();
  }

  onDeleteItem(bookshelf: Bookshelf) {
    // TODO: add confirmation
    const index = this._bookshelves.indexOf(bookshelf);
    this._bookshelves.splice(index, 1);
    this.selectedBookshelf = null;
    this.switchMode(false, false);
    // TODO: check for changes
    this.checkForChanges();
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
    this.selectedBookshelf = null;
    this.saveBookshelves.emit(this._bookshelves);
  }

  onSaveItem() {
    this.switchMode(false, true);
  }

  checkForChanges(): void {
    this.hasChanges = JSON.stringify(this.bookshelves) !== JSON.stringify(this._bookshelves);
  }

}
