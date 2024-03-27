import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  isLoading: boolean = false;

  fetchBooks() {
    this.isLoading = true;
    // fetching books
    this.isLoading = false
    
  }
}
