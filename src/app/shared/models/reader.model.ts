import { Bookshelf } from './bookshelf.model';

export class Reader {
  constructor(
    public _id: string,
    public _fullName: string,
    public _login: string,
    public _email: string,
    public _password: string,
    public _group: number,
    public _registrationDate: Date,
    public _bookshelfs: Bookshelf[]
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

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public get group(): number {
    return this._group;
  }

  public set group(value: number) {
    this._group = value;
  }

  public get registrationDate(): Date {
    return this._registrationDate;
  }

  public set registrationDate(value: Date) {
    this._registrationDate = value;
  }

  public get bookshelfs(): Bookshelf[] {
    return this._bookshelfs;
  }

  public set bookshelfs(value: Bookshelf[]) {
    this._bookshelfs = value;
  }
}
