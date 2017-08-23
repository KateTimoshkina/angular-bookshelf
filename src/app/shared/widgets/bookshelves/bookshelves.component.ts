import { Component, Input, OnInit } from '@angular/core';
import { Bookshelf } from '../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves',
  templateUrl: './bookshelves.component.html',
  styleUrls: ['./bookshelves.component.css']
})
export class BookshelvesComponent implements OnInit {
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

}
