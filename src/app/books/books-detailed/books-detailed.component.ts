import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'app-books-detailed',
  templateUrl: './books-detailed.component.html',
  styleUrls: ['./books-detailed.component.css']
})
export class BooksDetailedComponent implements OnInit {
  locked: boolean;
  book: Book;

  constructor(private route: ActivatedRoute,
              private dsService: DataStorageService) {
  }

  ngOnInit() {
    const me = this;
    me.locked = true;
    me.route.params.subscribe(
      (params) => {
        me.dsService.getBook(params['bookId'])
          .subscribe(
            (response: Book) => {
              me.book = new Book(response);
              console.log(me.book);
              me.locked = false;
            }
          );
      }
    );
  }

}
