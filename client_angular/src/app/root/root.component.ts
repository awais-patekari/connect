import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service'; 

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private localStore: LocalService) { }
  user: object = {};

  ngOnInit(): void {
    this.user = JSON.parse(this.localStore.getData('user') || '{}')
  }

  isEmptyObject(obj: object) {
    return (obj && (Object.keys(obj).length === 0));
 }
}
