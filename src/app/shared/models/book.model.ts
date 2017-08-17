import { Author } from './author.model';

// TODO: make constructor for json parsing

export class Book {
  constructor(
    public _id: string,
    public _title: string,
    public _authors: Author[],
    public _publishingYear: number,
    public _series: string
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

  public get authors(): Author[] {
    return this._authors;
  }

  public set authors(value: Author[]) {
    this._authors = value;
  }

  public get publishingYear(): number {
    return this._publishingYear;
  }

  public set publishingYear(value: number) {
    this._publishingYear = value;
  }

  public get series(): string {
    return this._series;
  }

  public set series(value: string) {
    this._series = value;
  }
}
