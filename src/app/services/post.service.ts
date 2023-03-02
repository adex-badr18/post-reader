import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=8');
    // return [
    //   {
    //     id: 1,
    //     title: 'My first post',
    //     body: 'This is my first post.',
    //     votes: 1
    //   },
    //   {
    //     id: 2,
    //     title: 'My favorite frontend framework',
    //     body: 'My favorite frontend framework is Angular.',
    //     votes: 1
    //   },
    //   {
    //     id: 3,
    //     title: 'My favorite backend framework',
    //     body: 'My favorite backend framework is NodeJS and Express.',
    //     votes: 1
    //   }
    // ];
  }
}
