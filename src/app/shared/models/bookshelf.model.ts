import { Book } from './book.model';

class BookWithStatus {
  public _book: Book;
  public _status: string;

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
    this._status = value;
  }
}

export class Bookshelf {
  private _id: string;
  private _title: string;
  private _books: {book: Book, status: string}[];

  constructor(input) {
    if (!input) {
      return;
    }

    this.id = input['id'];
    this.title = input['title'];
    this.books = input['books'];
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get books(): { book: Book, status: string }[] {
    return this._books;
  }

  public set books(value: { book: Book, status: string }[]) {
    this._books = [];
    if (value) {
      for (const item in value) {
        if (item) {
          this._books.push(item ? new BookWithStatus(item) : null);
        }
      }
    }
  }
}
