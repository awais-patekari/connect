import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  BASE_URL = "http://localhost:4000/";
  getComments(postId: string, getUserInfo: boolean) {
    return this.http.get(`${this.BASE_URL}comment/${postId}?getUserInfo=${getUserInfo || false}`).pipe((catchError(error => {return throwError(error)})))
  }
  addComment(comment: object) {
    return this.http.post(`${this.BASE_URL}comment/`, comment).pipe((catchError(error => {return throwError(error)})))
  }
  deleteComment(id: string) {
    return this.http.delete(`${this.BASE_URL}comment/${id}`, {}).pipe((catchError(error => {return throwError(error)})))
  }
}
