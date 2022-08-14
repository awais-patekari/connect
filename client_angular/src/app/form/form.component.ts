import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { LocalService } from '../local.service';
import { PostService } from '../post.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private postService: PostService,
    private localStorage: LocalService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.message = this.data.msg;
    // this.tags = this.data.tgs;
    // this.base64Input = this.data.datapostImg;
  }

  @Output() submit = new EventEmitter<boolean>();
  @Input() msg: string = '';
  @Input() tgs: string = '';
  @Input() postImg: string = '';
  base64Input: any;
  message: string = '';
  tags: string = '';
  user: any;
  ngOnInit(): void {
    this.user = JSON.parse(this.localStorage.getData('user') || '{}');
    if (this.data && this.data.text) {
      console.log("this.data =",this.data);
      this.message = this.data.text;
      this.tags = this.data.tags.join(',') || '';
      this.base64Input = this.data.image;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64Input = reader.result;
    };
  }

  //handle adding/editing posts
  handleSubmit() {
    if (this.data && this.data.text) {
      this.postService.editPost(this.data._id, {
        ...this.data,
        text: this.message,
        image: this.base64Input,
        tags: this.tags ? this.tags.split(',') : [],
        user: this.user._id,
      }).subscribe((res) => {
        this.submit.emit(true);
      });
    } else {
      this.postService
        .addPost({
          text: this.message,
          image: this.base64Input,
          tags: this.tags ? this.tags.split(',') : [],
          user: this.user._id,
        })
        .subscribe((res) => {
          this.submit.emit(true);
        });
    }
  }

  clearForm() {
    this.base64Input = '';
    this.message = '';
    this.tags = '';
  }
}
