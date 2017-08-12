import { Book } from './book.model';

export class Bookshelf {
  constructor(
    public _id: string,
    public _title: string,
    public _books: {book: Book, status: string}[]
  ) {}

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

  public get books(): { book: Book; status: string }[] {
    return this._books;
  }

  public set books(value: { book: Book; status: string }[]) {
    this._books = value;
  }
}
