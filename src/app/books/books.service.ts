import { Book } from '../shared/models/book.model';
import { Subject } from 'rxjs/Subject';

export class BooksService {
  booksUpdated = new Subject<Book[]>();
  books: Book[] = [
    new Book('gdfgdfsdgd', 'Book title', [], 1967, 'books'),
    new Book('dsdilkl;l;', 'Cras egestas semper orci', [], 2015, null),
    new Book('fsfsfdsfsd;', 'Vestibulum velit ante, porttitor sed leo ut', [], 1972, null)
  ];

  getBooks(): Book[] {
    return this.books.slice();
  }

  addBook(newBook: Book): void {
    this.books.push(newBook);
    this.booksUpdated.next(this.books.slice());
  }

  updateBook(updatedBook: Book) {
    const index: number = this.books.indexOf(
      this.books.find((book: Book) => book.id === updatedBook.id)
    );
    this.books[index] = updatedBook;
    this.booksUpdated.next(this.books.slice());
  }

}
