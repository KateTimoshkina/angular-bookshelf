import { Book } from '../shared/models/book.model';
import { Subject } from 'rxjs/Subject';

export class BooksService {
  booksUpdated = new Subject<Book[]>();
  books: Book[];

  setBooks(books: Book[]): void {
    this.books = books;
    this.booksUpdated.next(this.getBooks());
  }

  getBooks(): Book[] {
    return this.books.slice();
  }

  addBook(newBook: Book): void {
    this.books.push(newBook);
    this.booksUpdated.next(this.books.slice());
  }

  updateBook(updatedBook: Book) {
    const index: number = this.books.indexOf(this.getBook(updatedBook.id));
    this.books[index] = updatedBook;
    this.booksUpdated.next(this.books.slice());
  }

  getBook(id: string): Book {
    return this.books.find(book => book.id === id);
  }

}
