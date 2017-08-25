import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookshelf } from '../../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves-detailed',
  templateUrl: './bookshelves-detailed.component.html',
  styleUrls: ['./bookshelves-detailed.component.css']
})
export class BookshelvesDetailedComponent implements OnInit {
  @Output() editItem = new EventEmitter();
  @Input() bookshelf: Bookshelf;

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.editItem.emit(this.bookshelf);
  }

}
