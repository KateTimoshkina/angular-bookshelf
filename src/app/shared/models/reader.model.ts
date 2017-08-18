import { Bookshelf } from './bookshelf.model';

export class Reader {
  constructor(
    public _id: string,
    public _fullName: string,
    public _login: string,
    public _imageUrl: string,
    public _registrationDate: Date,
    public _bookshelves: Bookshelf[]
  ) {}

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get fullName(): string {
    return this._fullName;
  }

  public set fullName(value: string) {
    this._fullName = value;
  }

  public get login(): string {
    return this._login;
  }

  public set login(value: string) {
    this._login = value;
  }

  public get imageUrl(): string {
    return this._imageUrl;
  }

  public set imageUrl(value: string) {
    this._imageUrl = value;
  }

  public get registrationDate(): Date {
    return this._registrationDate;
  }

  public set registrationDate(value: Date) {
    this._registrationDate = value;
  }

  public get bookshelves(): Bookshelf[] {
    return this._bookshelves;
  }

  public set bookshelves(value: Bookshelf[]) {
    this._bookshelves = value;
  }
}
