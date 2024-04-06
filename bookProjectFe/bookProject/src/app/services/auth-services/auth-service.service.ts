import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private API = 'http://127.0.0.1:8000/user/';


  constructor(private http: HttpClient) { }

  //  logIn(username: string, password: string): Observable<any> {
  //    return this.http.post(
  //      'http://127.0.0.1:8000/user/login/', { username, password }
  //      ) as Observable<any>;
  //  }

  registerUser(data: string): Observable<any> {
    const currentUrl = this.API + 'register/';

    return this.http.post(currentUrl, data) as Observable<any>;
  }

  login(data: string) {
    const currentUrl = this.API + 'api/token/';
    return this.http.post(this.API, data);
  }

  tokenGetter() {
    return localStorage.getItem('access_token');
  }


}
