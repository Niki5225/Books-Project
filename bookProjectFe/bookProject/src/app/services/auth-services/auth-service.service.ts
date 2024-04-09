import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginRespose } from 'src/app/types/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private API = 'http://127.0.0.1:8000/user/';
  private readonly TOKEN_KEY = 'jwt';


  constructor(private http: HttpClient) { }

  registerUser(data: string): Observable<any> {
    const currentUrl = this.API + 'register/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Set Content-Type header

    return this.http.post(currentUrl, data, { headers: headers }) as Observable<any>;
  }

  login(data: string) {

    const currentUrl = this.API + 'api/token/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Set Content-Type header

    return this.http.post<LoginRespose>(currentUrl, data, { headers: headers }).pipe(
      tap(response => {
        if (response && response.jwt) {          
          localStorage.setItem(this.TOKEN_KEY, response.jwt)
        }
      }
      )
    ) as Observable<any>;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Clear JWT token from localStorage
  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

}
