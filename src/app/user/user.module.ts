import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BuyComponent } from './buy/buy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, BuyComponent]
})
export class UserModule { }
