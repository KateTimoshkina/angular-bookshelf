import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
