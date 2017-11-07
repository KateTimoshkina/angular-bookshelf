import { Base } from '../interfaces/base.interface';

export class User implements Base {
  public _id: string;
  public _image: string;
  public _username: string;
  public _first_name: string;
  public _last_name: string;
  public _email: string;
  public _groups: Array<number>;

  constructor(input) {
    this.id = input['id'];
    this.image = input['image'] || null;
    this.username = input['username'];
    this.first_name = input['first_name'] || null;
    this.last_name = input['last_name'] || null;
    this.email = input['email'] || null;
    this.groups = input['groups'] || [];
  }

  public clone(): User {
    return new User(this);
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get image(): string {
    return this._image;
  }

  public set image(value: string) {
    this._image = value;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get first_name(): string {
    return this._first_name;
  }

  public set first_name(value: string) {
    this._first_name = value;
  }

  public get last_name(): string {
    return this._last_name;
  }

  public set last_name(value: string) {
    this._last_name = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get groups(): Array<number> {
    return this._groups;
  }

  public set groups(value: Array<number>) {
    this._groups = [];
    if (value.length > 0) {
      for (const item of value) {
        this._groups.push(item);
      }
    }
  }
}
