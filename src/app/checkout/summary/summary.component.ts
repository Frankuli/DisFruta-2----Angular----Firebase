import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  cart$;
  product: Product;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    console.log(this.cart$);
  }

  removeFromCart(product: Product) {
    console.log(product);
    this.shoppingCartService.removeFromCart(product);
  }
  addToCard(product: Product) {
    //console.log(product);
    this.shoppingCartService.addToCart(product);
  }

}
