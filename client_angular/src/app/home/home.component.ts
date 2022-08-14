import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { LocalService } from '../local.service';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild(PostsComponent) posts: any;
  user: any;

  constructor(public dialog: MatDialog, private localStorage: LocalService) {}
  ngOnInit(): void {
    this.user = JSON.parse(this.localStorage.getData('user') || '{}');
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      // width: '500px',
      // height: '400px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    dialogRef.componentInstance.submit.subscribe((res) => {
      this.posts.updatePosts();
    });
  }

  handleSettings() {}

  public onEditPost(post: any) {
    const dialogRef = this.dialog.open(FormComponent, {
      // width: '500px',
      // height: '400px',
      data: post,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    dialogRef.componentInstance.submit.subscribe((res) => {
      this.posts.updatePosts();
    });
  }

  handleLogout() {
    this.localStorage.removeData('user');
    window.location.reload();
  }
}