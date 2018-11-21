import { DetailComponent } from './shared/detail/detail.component';
import { CommentComponent } from './admin/comment/comment.component';
import { LogComponent } from './shared/log/log.component';
import { BuyComponent } from './user/buy/buy.component';
import { OrderService } from './services/order.service';
import { SendComponent } from './checkout/send/send.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { FilterComponent } from './shop/filter/filter.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProducFormComponent } from './admin/produc-form/produc-form.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { SummaryComponent } from './checkout/summary/summary.component';
import { ProductComponent } from './shop/product/product.component';
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
import { ProfileComponent } from './user/profile/profile.component';
import { OrderComponent } from './admin/order/order.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FormComponent,
    FooterComponent,
    IndexComponent,
    ShopComponent,
    FilterComponent,
    ProductComponent,
    SummaryComponent,
    ProducFormComponent,
    AdminProductsComponent,
    SendComponent,
    BuyComponent,
    ProfileComponent,
    LogComponent,
    OrderComponent,
    CommentComponent,
    DetailComponent
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
      { path: 'login', component: LogComponent },
      { path: 'cart', component: SummaryComponent },

      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'buy', component: BuyComponent, canActivate: [AuthGuard] },

      { path: 'summary', component: SummaryComponent, canActivate: [AuthGuard] },
      { path: 'summary/send', component: SendComponent, canActivate: [AuthGuard] },

      { path: 'admin/orders', component: OrderComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/orders/:id', component: DetailComponent, canActivate: [AuthGuard, AdminAuthGuard] },

      { path: 'admin/comments', component: CommentComponent, canActivate: [AuthGuard, AdminAuthGuard] },

      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/products/new', component: ProducFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/products/:id', component: ProducFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    ]),
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
