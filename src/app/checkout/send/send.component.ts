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
import * as moment from 'moment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  sucursales = [];

  pruebaSend:any = {id:null,cliente:null,sucursal:null,destino:null,cadete:null,estado:null,fecha:null}

  constructor(
    private router: Router,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private sendService: SendService,
    private branchService: BranchService){

    this.branch$ = branchService.getAll();

    this.sendService.getSucursales()
    .subscribe(sucursal => {
      this.sucursales = sucursal;


    });
  }

  async placeOrder() {
    // console.log(this.sucursal);
    let order = new Order(this.userId, this.envio, this.cart,this.sucursal);

    this.pruebaSend.id = Date.now();
    this.pruebaSend.cliente = this.userId;

    for (let j = 0; j < this.sucursales.length; j++) {
      // console.log(this.sucursales[j]['id'] == this.sucursal);
      // console.log(this.sucursales[j]['id']);
      if (this.sucursales[j]['name'] == this.sucursal) {
        this.pruebaSend.sucursal = this.sucursales[j]['id'];
      }
    }


    this.pruebaSend.destino = this.envio['direccion'];
    this.pruebaSend.cadete = null;
    this.pruebaSend.estado = "Pendiente";
    this.pruebaSend.fecha = moment().format();

    //  let send = new Send(this.userId, this.envio,this.sucursal);

    let result = await this.orderService.placeOrder(order);

console.log(this.pruebaSend);

    let r = await this.sendService.placeSend(this.pruebaSend);

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
