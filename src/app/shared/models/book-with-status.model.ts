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
    if (BOOK_STATUS.indexOf(value) > -1) {
      this._status = value;
    } else {
      this._status = BOOK_STATUS[0];
    }
  }
}
