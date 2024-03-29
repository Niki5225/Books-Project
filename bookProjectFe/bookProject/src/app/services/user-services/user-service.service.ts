import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../types/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private API = 'http://127.0.0.1:8000/user/all-users/'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.API)
  }
}
