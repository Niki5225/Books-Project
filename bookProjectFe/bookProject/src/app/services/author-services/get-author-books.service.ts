import { Injectable } from '@angular/core';
import { GetBooksService } from '../books-services/get-books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/types/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAuthorBooksService {
  private APIAuthorBooks = 'http://127.0.0.1:8000/author/';
  constructor(private http: HttpClient) { }

  getParticularAuthorBooks(path: string): Observable<any> {
    const url = this.APIAuthorBooks + `${path}`;
    return this.http.get<any>(url);
  }
}

