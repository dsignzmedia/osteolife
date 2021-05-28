import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public products : any;
  constructor(public navParams: NavParams,public service: UserService,public  modalCtrl: ModalController) { }
  ngOnInit() {
    console.log('ionViewDidLoad ModalPage');
    this.service.fetchProducts(this.navParams.get('productlist')).then( (response : any) => {
      console.log("fetchProducts");
      console.log(response);
      this.products = response;
       }).catch( error => {
     })
    console.log(this.navParams);
  }
  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtrl.dismiss(closeModal);
  }
  ionViewDidLoad() {
      console.log('ionViewDidLoad ModalPage');
      console.log(this.navParams);
      this.products = this.navParams.get('productlist');
  }
}
