import { Book } from './book.model';

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
          // TODO: fix
          this._books.push({
            book: new Book(item.book),
            status: item.status
          });
        }
      }
    }
  }
}
