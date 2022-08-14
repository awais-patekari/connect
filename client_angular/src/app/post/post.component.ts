import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from '../post.service';
import { CommentService } from '../comment.service';
import { LocalService } from '../local.service';
import * as moment from 'moment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private localStorage: LocalService
  ) {}

  @Input() post: any;

  @Output() updatePosts = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  comments: any;
  showComments: boolean = false;
  newComment: string = '';
  user: any;
  timeDiff: any;

  public getComments = () => {
    this.commentService.getComments(this.post._id, true).subscribe((res) => {
      this.comments = res;
    });
  }
  ngOnInit(): void {
    this.getComments();
    this.user = JSON.parse(this.localStorage.getData('user') || '{}');
    this.timeDiff = moment(this.post?.createdAt).fromNow();
  }

  public likePost = () => {
    this.postService.likePost(this.post._id).subscribe((res) => {
      this.updatePosts.emit();
    });
  };

  public toggleComments = () => {
    this.showComments = !this.showComments;
  };

  public addComment = () => {
    this.commentService.addComment({
      user: this.user._id,
      post: this.post._id,
      comment: this.newComment,
    }).subscribe((res) => {
      this.getComments();
      this.newComment = '';
    });
  };

  public deletePost = () => {
    this.postService.deletePost(this.post._id).subscribe((res) => {
      this.updatePosts.emit();
    })
  };

  public editPost = () => {
    this.edit.emit(this.post);
  };
}
