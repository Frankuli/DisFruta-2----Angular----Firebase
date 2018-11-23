import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent{
  orders$;


  constructor(
    private authService: AuthService,
    private orderService: OrderService) {
      this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid)));
      
      console.log(this.orders$);
    }
    c(o){
      console.log(o);
    }
}


