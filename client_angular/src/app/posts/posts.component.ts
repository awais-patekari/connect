import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  @Input() getPosts : any;
  @Output() editPost = new EventEmitter<any>(); 

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    })
  }

  public updatePosts() {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    })
  }

  public onEdit(post: any) {
    this.editPost.emit(post);
  }
}
