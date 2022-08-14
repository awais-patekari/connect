import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private localStorage: LocalService
  ) { }
  username: string = '';
  password: string = '';
  email:string = '';
  newUser: boolean = false;

  ngOnInit(): void {
  }

  //handle login/create new user
  public handleSubmit() {
    if(this.newUser) {
      this.userService.createUser({
        userName: this.username,
        password: this.password,
        email: this.email
      }).subscribe((res) => {
        // console.log("res =",res);
        this.localStorage.saveData('user', JSON.stringify(res));
        window.location.reload();
      });
    }
    else {
      this.userService.loginUser({
        userName: this.username,
        password: this.password,
      }).subscribe((res: any) => {
        // console.log("res =",res);
        this.localStorage.saveData('user', JSON.stringify(res.user));
        window.location.reload();
      });
    }
  }
}
