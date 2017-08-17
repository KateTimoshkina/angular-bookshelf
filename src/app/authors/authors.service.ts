import { Author } from '../shared/models/author.model';
import { Subject } from 'rxjs/Subject';

export class AuthorsService {
  authorsChanged = new Subject<Author[]>();
  authors: Author[] = [
    new Author('sdfgdfgs', 'Name', 'Name2', 1945, 'bi eget eros dui. Vivamus in nibh ipsum. Proin aliquam maximus' +
      ' ullamcorper. Mauris interdum lacus ipsum, ut lobortis sapien accumsan ac. Pellentesque magna sapie', null),
    new Author('fgdgdfw3454', 'Aliquam', 'Quisque', 1983, 'Vestibulum velit ante, porttitor sed leo ut, vestibulum' +
      ' vestibulum justo. Aliquam', null),
    new Author('53686ib57u', 'Praesent', 'Proin bibendum', 1978, 'd a lacus convallis, eleifend ex sed, blandit' +
      ' turpis. In hac habitasse platea dictumst. Nam sed odio eu ante ullamcorper bibendum vitae a urna. Aenean' +
      ' viverra non turpis vel d', null)
  ];

  getAuthor(id: string): Author {
    return this.authors.find(
      (author: Author) => author.id === id
    );
  }

  getAuthors(): Author[] {
    return this.authors.slice();
  }

  addAuthor(newAuthor: Author) {
    this.authors.push(newAuthor);
    this.authorsChanged.next(this.getAuthors());
  }

  addAuthors(authors: Author[]) {
    this.authors.push(...authors);
    this.authorsChanged.next(this.getAuthors());
  }
}
