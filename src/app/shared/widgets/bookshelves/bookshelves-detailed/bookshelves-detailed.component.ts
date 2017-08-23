import { Component, Input, OnInit } from '@angular/core';
import { Bookshelf } from '../../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves-detailed',
  templateUrl: './bookshelves-detailed.component.html',
  styleUrls: ['./bookshelves-detailed.component.css']
})
export class BookshelvesDetailedComponent implements OnInit {
  @Input() bookshelf: Bookshelf;

  constructor() { }

  ngOnInit() {
  }

}
