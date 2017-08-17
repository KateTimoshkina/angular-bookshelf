import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-detailed',
  templateUrl: './books-detailed.component.html',
  styleUrls: ['./books-detailed.component.css']
})
export class BooksDetailedComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute,
              private booksService: BooksService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.book = this.booksService.getBook(params['bookId']);
      }
    );
  }

}
