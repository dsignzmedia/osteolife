import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {
  public allproducts: any;
  constructor(public navParams: NavParams, public service: UserService) { }

  ngOnInit() {
    this.service.allProducts().then( (response : any) => {
      console.log("fetchProducts");
      console.log(response);
      this.allproducts = response;
      }).catch( error => {
    })
  }

}
