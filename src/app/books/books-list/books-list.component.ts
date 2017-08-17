import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Book } from '../../shared/models/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit , OnDestroy{
  books: Book[];
  booksSubscription = new Subscription();

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
    this.booksSubscription = this.booksService.booksUpdated.subscribe(
      (books: Book[]) => this.books = books
    );
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
