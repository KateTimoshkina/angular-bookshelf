import { Bookshelf } from './bookshelf.model';

export class Reader {
  private _id: string;
  private _fullName: string;
  private _login: string;
  private _imageUrl: string;
  private _bookshelves: Bookshelf[];

  constructor(input: any) {

    if (!input) {
      return;
    }

    this.id = input['id'];
    this.fullName = input['fullName'] || null;
    this.login = input['login'] || null;
    this.imageUrl = input['imageUrl'] || null;
    this.bookshelves = input['bookshelves'] || null;

  }

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

  public get bookshelves(): Bookshelf[] {
    return this._bookshelves;
  }

  public set bookshelves(value: Bookshelf[]) {
    this._bookshelves = [];
    if (value) {
      for (const item of value) {
        this._bookshelves.push(item ? new Bookshelf(item) : null);
      }
    }
  }
}
