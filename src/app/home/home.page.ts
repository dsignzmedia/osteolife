import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public category : any;
  constructor(public service: UserService) { }

  ngOnInit() {
     this.service.allcategory().then( (response : any) => {
      console.log("allcategory");
      console.log(response);
      this.category = response;
       }).catch( error => {
     })
  }

}
