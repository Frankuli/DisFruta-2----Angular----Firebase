import { Router } from '@angular/router';
import { Order } from './../../models/order';
import { OrderService } from './../../services/order.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from './../../models/shopping-cart';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppUser } from 'src/app/models/user';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit, OnDestroy {
  shipping = {};
  cart: ShoppingCart;
  userId: string;
  appUser: AppUser;
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService){

  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let  result = await this.orderService.placeOrder(order);

    this.router.navigate(['/']);
  }

  async ngOnInit(){
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
