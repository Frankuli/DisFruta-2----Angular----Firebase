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
    private orderService: OrderService) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    this.order$ = this.orderService.get(id).valueChanges();
  }
  c(o){
    console.log(o);
  }
}
