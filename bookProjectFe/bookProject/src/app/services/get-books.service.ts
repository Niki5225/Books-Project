import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../types/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {
  private API = 'http://127.0.0.1:8000/book/all-books'
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<any>(this.API)
  }
}
