import { Author } from './author.model';
import { Base } from '../interfaces/base.interface';

export class Book implements Base {
  private _id: string;
  private _title: string;
  private _authors: Author[];
  private _publishingYear: number;
  private _description: string;

  constructor(input) {
    if (!input) {
      return;
    }

    this.id = input['id'];
    this.title = input['title'] || null;
    this.authors = input['authors'] || null;
    this.publishingYear = input['publishingYear'] || null;
    this.description = input['description'] || null;

  }

  public clone(): Book {
    return new Book(this);
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

  public get authors(): Author[] {
    return this._authors;
  }

  public set authors(value: Author[]) {
    this._authors = [];
    if (value) {
      for (const item in value) {
        this._authors.push(item ? new Author(item) : null);
      }
    }
  }

  public get publishingYear(): number {
    return this._publishingYear;
  }

  public set publishingYear(value: number) {
    this._publishingYear = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }
}
