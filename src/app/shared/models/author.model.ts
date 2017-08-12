import { Book } from './book.model';

export class Author {
  constructor(
    public _id: string,
    public _firstName: string,
    public _lastName: string,
    public _yearOfBirth: number,
    public _bio: string,
    public _books: Book[]
  ) {}

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
    this._books = value;
  }
}
