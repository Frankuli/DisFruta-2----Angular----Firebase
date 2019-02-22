import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  order$;

  constructor(
    private router: ActivatedRoute,
    private orderService: OrderService,
    private shoppincartService: ShoppingCartService ) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    this.order$ = this.orderService.get(id).valueChanges();
  }

  pag(venta){
    if(venta.recargoPag == 1){
      return this.rec(venta)*0.1;
    }
    return 0;
  }
  env(venta){
    if (venta.recargoEnv == 5) {
      return this.rec(venta) * 0.5;
    }
    return 0;
  }
  rec(venta){
    let cont = 0;
    for(let item in venta.items){
      cont += venta.items[item].totalPrice;
    }
    return cont;
  }
}
