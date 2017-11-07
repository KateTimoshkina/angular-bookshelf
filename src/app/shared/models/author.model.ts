import { Book } from './book.model';
import { Base } from '../interfaces/base.interface';

export class Author implements Base {
  public _id: string;
  public _firstName: string;
  public _lastName: string;
  public _yearOfBirth: number;
  public _bio: string;
  public _books: Book[];

  constructor(input) {
    this.id = input['id'];
    this.firstName = input['first_name'] || null;
    this.lastName = input['last_name'] || null;
    this.yearOfBirth = input['year_of_birth'] || null;
    this.bio = input['bio'] || null;
    this.books = input['books'] || [];
  }

  public clone(): Author {
    return new Author(this);
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get yearOfBirth(): number {
    return this._yearOfBirth;
  }

  public set yearOfBirth(value: number) {
    this._yearOfBirth = value;
  }

  public get bio(): string {
    return this._bio;
  }

  public set bio(value: string) {
    this._bio = value;
  }

  public get books(): Book[] {
    return this._books;
  }

  public set books(value: Book[]) {
    this._books = [];
    if (value.length > 0) {
      for (const item of value) {
        this._books.push(item ? new Book(item) : null);
      }
    }
  }
}
