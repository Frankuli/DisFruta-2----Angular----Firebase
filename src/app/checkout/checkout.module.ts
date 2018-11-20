import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { SendComponent } from './send/send.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SummaryComponent, SendComponent]
})
export class CheckoutModule { }
