import { Book } from './book.model';
import { BOOK_STATUS } from '../constants/constants';

export class BookWithStatus {
  private _book: Book;
  private _status: string;

  constructor(input) {
    if (!input) {
      return;
    }
    this.book = input['book'];
    this.status = input['status'];
  }

  public get book(): Book {
    return this._book;
  }

  public set book(value: Book) {
    this._book = new Book(value);
  }

  public get status(): string {
    return this._status;
  }

  public set status(value: string) {
    if (value in BOOK_STATUS) {
      this._status = value;
    } else {
      this._status = BOOK_STATUS[0];
    }
  }
}
