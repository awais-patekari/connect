import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //API'S for posts
  constructor(private http: HttpClient) { }
  BASE_URL = "http://localhost:4000/";
  getPosts() {
    return this.http.get(`${this.BASE_URL}posts?getUserInfo=true`).pipe((catchError(error => {return throwError(error)})))
  }
  likePost(id: string) {
    return this.http.post(`${this.BASE_URL}posts/${id}/like`, {}).pipe((catchError(error => {return throwError(error)})))
  }
  addPost(post: object) {
    return this.http.post(`${this.BASE_URL}posts/`, post).pipe((catchError(error => {return throwError(error)})))
  }
  deletePost(id: string) {
    return this.http.delete(`${this.BASE_URL}posts/${id}`).pipe((catchError(error => {return throwError(error)})))
  }
  editPost(id: string, post: object) {
    return this.http.patch(`${this.BASE_URL}posts/${id}`, post).pipe((catchError(error => {return throwError(error)})))
  }
}
