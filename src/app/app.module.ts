import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProducFormComponent } from './admin/produc-form/produc-form.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './home/index/index.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { environment } from '../environments/environment';

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
    SummaryComponent,
    ProducFormComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'disfruta'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'admin/products', component: AdminProductsComponent },
      { path: 'admin/products/new', component: ProducFormComponent },
      { path: 'admin/products/:id', component: ProducFormComponent },
    ]),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
