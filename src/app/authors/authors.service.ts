import { Author } from '../shared/models/author.model';
import { Subject } from 'rxjs/Subject';

export class AuthorsService {
  authorsChanged = new Subject<Author[]>();
  authors: Author[] = [];

  setAuthors(authors: Author[]): void {
    this.authors = authors;
    this.authorsChanged.next(this.getAuthors());
  }

  getAuthor(id: string): Author {
    return this.authors.find(
      (author: Author) => author.id === id
    );
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
