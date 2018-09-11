import { SummaryComponent } from './checkout/summary/summary.component';
import { ProductComponent } from './shop/product/product.component';
import { FilterComponent } from './shop/filter/filter.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ShopComponent } from './shop/shop/shop.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormComponent } from './shared/form/form.component';
import { SliderComponent } from './shared/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './home/index/index.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FormComponent,
    FooterComponent,
    IndexComponent,
    ShopComponent,
    ProfileComponent,
    FilterComponent,
    ProductComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'shop', component: ShopComponent },
      {path: 'profile', component: ProfileComponent},
      {path: 'summary', component: SummaryComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
