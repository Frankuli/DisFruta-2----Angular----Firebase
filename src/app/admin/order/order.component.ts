import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{
  orders$;

  constructor(private orderService: OrderService) {
    this.orders$ = orderService.getAll();
  }
c(o){
console.log(o);
}

}

