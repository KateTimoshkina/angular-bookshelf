import { Bookshelf } from './bookshelf.model';
import { Base } from '../interfaces/base.interface';
import { User } from './user.model';

export class Reader extends User implements Base {
  private _bookshelves: Bookshelf[];

  constructor(input?: any) {
    super(input);

    if (!input) {
      return;
    }

    this.bookshelves = input['bookshelves'] || [];

  }

  public clone(): Reader {
    return new Reader(this);
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
