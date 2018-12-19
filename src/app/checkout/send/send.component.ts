import { SendService } from './../../services/send.service';
import { Send } from './../../models/send';
import { BranchService } from './../../services/branch.service';
import { Router } from '@angular/router';
import { Order } from './../../models/order';
import { OrderService } from './../../services/order.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from './../../models/shopping-cart';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppUser } from 'src/app/models/user';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit, OnDestroy {
  envio = {};
  cart: ShoppingCart;
  userId: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  sucursal;
  branch;
  branch$;

  constructor(
    private router: Router,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private sendService: SendService,
    private branchService: BranchService){

    this.branch$ = branchService.getAll();
  }

  async placeOrder() {
    // console.log(this.sucursal);
    let order = new Order(this.userId, this.envio, this.cart,this.sucursal);
    let send = new Send(this.userId, this.envio,this.sucursal);
    let result = await this.orderService.placeOrder(order);
    let r = await this.sendService.placeSend(send);
    this.router.navigate(['/']);
  }

  async ngOnInit(){
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.branch$.subscribe(branch => (this.branch = branch));

    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
