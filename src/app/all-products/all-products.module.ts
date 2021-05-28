import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { AllProductsPageRoutingModule } from './all-products-routing.module';

import { AllProductsPage } from './all-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllProductsPageRoutingModule
  ],
  providers:[NavParams],
  declarations: [AllProductsPage]
})
export class AllProductsPageModule {}
