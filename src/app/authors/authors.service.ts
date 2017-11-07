import { Author } from '../shared/models/author.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class AuthorsService {
  authorsChanged = new Subject<Author[]>();
  authors: Author[] = [];
  author: Author = null;

  setAuthors(authors: Author[]): void {
    this.authors = authors;
    this.authorsChanged.next(this.getAuthors());
  }

  getAuthors(): Author[] {
    return this.authors.slice();
  }

  addAuthor(newAuthor: Author): void {
    this.authors.push(newAuthor);
    this.authorsChanged.next(this.getAuthors());
  }

  addAuthors(authors: Author[]): void {
    this.authors.push(...authors);
    this.authorsChanged.next(this.getAuthors());
  }
}
