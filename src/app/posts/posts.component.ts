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
      // add votes to each returned object in the stream
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

  addPost(post: Post) {
    this.posts.unshift(post); // add the post to the top of the post array.

    alert('Post added');
  }

}
