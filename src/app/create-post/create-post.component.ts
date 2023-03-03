import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title: string = '';
  body: string = '';

  @Output() addPost: EventEmitter<any> = new EventEmitter();

  constructor9() { }

  ngOnInit(): void {

  }

  submitForm() {
    const post = {
      title: this.title,
      body: this.body,
      votes: 1
    }

    this.addPost.emit(post);

    // clear the form
    this.title = '';
    this.body = '';
  }

}
