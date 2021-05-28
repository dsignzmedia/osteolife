import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public products : any;
  constructor(public navParams: NavParams, private route: ActivatedRoute, public service: UserService,public  modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('ionViewDidLoad ModalPage');
    this.route.queryParams.subscribe(params => {
      if (params) {
        //let queryParams = JSON.parse(params);
        console.log(params.categoryname);
        this.service.fetchProducts(params.categoryname).then( (response : any) => {
          console.log("fetchProducts");
          console.log(response);
          this.products = response;
          }).catch( error => {
        })
      }
    });
  }

  ionViewDidLoad() {
  }
}
