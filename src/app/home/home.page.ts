import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
     this.service.testapi('test').then( (response : any) => {
      console.log("test api");
      console.log(response);
       }).catch( error => {
     })
  }

}
