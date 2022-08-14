import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //API'S for users
  constructor(private http: HttpClient) { }

  BASE_URL = "http://localhost:4000/";
  loginUser(user: object) {
    return this.http.post(`${this.BASE_URL}user/login`, user).pipe((catchError(error => {return throwError(error)})))
  }
  createUser(user: object) {
    return this.http.post(`${this.BASE_URL}user/create`, user).pipe((catchError(error => {return throwError(error)})))
  }
  editUser(id: string, user: object) {
    return this.http.patch(`${this.BASE_URL}user/${id}`, user).pipe((catchError(error => {return throwError(error)})))
  }
}
