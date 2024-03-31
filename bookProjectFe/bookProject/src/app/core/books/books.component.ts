import { Component, OnInit } from '@angular/core';
import { GetBooksService } from 'src/app/services/books-services/get-books.service';
import { HelperFunctionsService } from 'src/app/shared/helper-functions.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css', ]
})
export class BooksComponent implements OnInit {
  isLoading: boolean = false;
  books: Book[] = [];

  constructor(private bookService: GetBooksService, private helperFuncs: HelperFunctionsService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  private fetchBooks() {
    this.isLoading = true;
    this.bookService.getBooks().subscribe(
      (data: any) => {
        this.books = this.helperFuncs.fillTheBooks(data.books);
        console.log(this.books);
        
      },
      (error: string) => {
        console.error('Error fetching books:', error);
      }
    );
    this.isLoading = false;
  }
}