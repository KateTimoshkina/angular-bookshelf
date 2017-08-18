import { Component, Input, OnInit } from '@angular/core';
import { Bookshelf } from '../../models/bookshelf.model';

@Component({
  selector: 'app-bookshelves',
  templateUrl: './bookshelves.component.html',
  styleUrls: ['./bookshelves.component.css']
})
export class BookshelvesComponent implements OnInit {
  @Input() bookshelves: Bookshelf[];
  isDetailed = false;
  isEditable = false;

  constructor() { }

  ngOnInit() {

  }

}
