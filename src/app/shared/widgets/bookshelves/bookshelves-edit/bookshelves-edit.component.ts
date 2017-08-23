import { Component, Input, OnInit } from '@angular/core';
import { Bookshelf } from '../../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves-edit',
  templateUrl: './bookshelves-edit.component.html',
  styleUrls: ['./bookshelves-edit.component.css']
})
export class BookshelvesEditComponent implements OnInit {
  @Input() bookshelf: Bookshelf;

  constructor() { }

  ngOnInit() {
  }

}
