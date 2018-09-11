import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './filter/filter.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, FilterComponent, ProductComponent, ShopComponent]
})
export class ShopModule { }
