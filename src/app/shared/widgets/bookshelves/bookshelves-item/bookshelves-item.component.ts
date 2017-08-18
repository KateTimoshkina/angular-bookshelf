import { Component, Input, OnInit } from '@angular/core';
import { Bookshelf } from '../../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves-item',
  templateUrl: './bookshelves-item.component.html',
  styleUrls: ['./bookshelves-item.component.css']
})
export class BookshelvesItemComponent implements OnInit {
  @Input() bookshelf: Bookshelf;

  constructor() { }

  ngOnInit() {
  }

}
