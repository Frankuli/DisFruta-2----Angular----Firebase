import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { FilterComponent } from './shop/filter/filter.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProducFormComponent } from './admin/produc-form/produc-form.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { SummaryComponent } from './checkout/summary/summary.component';
import { ProductComponent } from './shop/product/product.component';

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
import { UserService } from './services/user.service';

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
      { path: 'login', component: ProfileComponent },

      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'summary', component: SummaryComponent, canActivate: [AuthGuard] },

      { path: 'admin/products', component: AdminProductsComponent, canActivate : [AuthGuard, AdminAuthGuard] },
      { path: 'admin/products/new', component: ProducFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/products/:id', component: ProducFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    ]),
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
