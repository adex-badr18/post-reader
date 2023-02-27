import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string = "Posts";
  posts: Post[] = [];

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'My first post',
        body: 'This is my first post.',
        votes: 1
      },
      {
        id: 2,
        title: 'My favorite frontend framework',
        body: 'My favorite frontend framework is Angular.',
        votes: 1
      },
      {
        id: 3,
        title: 'My favorite backend framework',
        body: 'My favorite backend framework is NodeJS and Express.',
        votes: 1
      }
    ];
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p => p.id !== post.id);
    window.alert(`${post.title} has been added to favorite.`)
  }

}
