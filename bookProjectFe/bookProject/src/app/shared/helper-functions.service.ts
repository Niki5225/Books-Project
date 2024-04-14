import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class HelperFunctionsService {
  isLoggedIn = false;

  constructor() { }
  public fillTheBooks(bookObj: any): Book[] {
    let books: Book[]  = [];
    for (const key in bookObj) {
        let book: Book = {pk: key, data: bookObj[key]}
        books.push(book);
    }

    return books;
  }
}
