import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule,NavParams } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule
  ],
  providers:[NavParams],
  declarations: [ProductPage]
})
export class ProductPageModule {}
