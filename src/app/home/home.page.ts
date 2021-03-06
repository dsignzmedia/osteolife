import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../api/user.service';
import { ModalController  } from '@ionic/angular';
import { ProductPage } from '../product/product.page';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public category : any;
  public products : any;
  constructor(public service: UserService,public  modalCtrl: ModalController, private router: Router) { }
  async viewProduct(name){
    //  const modal = this.modalCtrl.create({
    //   component: ProductPage,
    //   componentProps: {
    //     'categoryname': name
    //   }
    // });
    // return (await modal).present();
    let navigationExtras: NavigationExtras = {
      queryParams: {
        categoryname: name
      }
    };
    this.router.navigate(['tabs/product'], navigationExtras);
  }
  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtrl.dismiss(closeModal);
  }
  ngOnInit() {
     this.service.allcategory().then( (response : any) => {
      console.log("allcategory");
      console.log(response);
      this.category = response;
       }).catch( error => {
     })
  }
}
