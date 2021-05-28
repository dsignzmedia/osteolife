import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  public orders: any;
  constructor(public navParams: NavParams, public service: UserService) { }

  ngOnInit() {
    this.service.orders().then( (response : any) => {
      console.log("fetchOrders");
      console.log(response);
      this.orders = response;
      }).catch( error => {
    })
  }

}
