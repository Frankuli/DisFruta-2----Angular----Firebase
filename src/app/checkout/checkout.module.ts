import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SummaryComponent, ProductQuantityComponent]
})
export class CheckoutModule { }
