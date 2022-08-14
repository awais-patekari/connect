import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }
  @Input() user:any;
  @Input() bold:any;
  @Input() small:boolean = false;
  @Input() disableName: boolean = false;
  initials: string = '';
  showInitials: boolean = false;
  circleColor: any;
  
  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];
  
  ngOnInit(): void {
    if (!this.user?.displayPicture) {
      this.showInitials = true;
      this.createInititals();

      const randomIndex = Math.floor(
        Math.random() * Math.floor(this.colors.length)
      );
      this.circleColor = this.colors[randomIndex];
    }
    this.createInititals();
  }

  private createInititals(): void {
    let initials = '';

    for (let i = 0; i < this.user?.userName.length; i++) {
      if (this.user?.userName.charAt(i) === ' ') {
        continue;
      }
      initials += this.user?.userName.charAt(i);

      if (initials.length == 1) {
        break;
      }
    }
    this.initials = initials;
  }

}
