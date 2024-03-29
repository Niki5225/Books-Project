import { Injectable } from '@angular/core';
import { GetBooksService } from '../books-services/get-books.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/types/book';

@Injectable({
  providedIn: 'root'
})
export class GetAuthorBooksService {
  constructor(private http: HttpClient, private getAllBooks: GetBooksService) { }

  public getAllBooksFunc(authorName: string) {
    let booksByAuthor: Book[] = []
    this.getAllBooks.getBooks().subscribe((data: any) => {
      // TODO: fix the author name!!
      booksByAuthor = this.fillTheBooksByParticularAuthor(data.books, authorName);
      console.log(booksByAuthor);
    })
  }

  private fillTheBooksByParticularAuthor(booksObj: any, searchedAuthorName: string): Book[] {
    let books: Book[] = [];
    for (const key in booksObj) {
      const data = booksObj[key];
      
      if (data.author === searchedAuthorName) {
        let book: Book = { pk: key, data: booksObj[key] }
        books.push(book);
      }
    }
    return books;
  }
}

