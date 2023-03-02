import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string = "Posts";
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        const post = res[i];
        post['votes'] = 1;
      }
      this.posts = res;
    });
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p => p.id !== post.id);
    // window.alert(`${post.title} is hidden.`);
  }

}
