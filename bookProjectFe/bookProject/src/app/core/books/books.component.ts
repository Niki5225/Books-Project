import { Component, OnInit } from '@angular/core';
import { GetBooksService } from 'src/app/services/get-books.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isLoading: boolean = false;
  books: Book[] = [];

  constructor(private bookService: GetBooksService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.isLoading = true;
    this.bookService.getBooks().subscribe(
      (data: any) => { // Specify the type of data
        this.books = this.fillTheBooks(data.books);
      },
      (error: string) => {
        console.error('Error fetching books:', error);
      }
    );
    this.isLoading = false;
  }

  private fillTheBooks(bookObj: any) {
    let books: Book[]  = []
    for (const key in bookObj) {
        let book: Book = {pk: key, data: bookObj[key]}
        books.push(book)
    }

    return books
  }
}