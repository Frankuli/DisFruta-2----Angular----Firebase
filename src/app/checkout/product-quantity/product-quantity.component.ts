import { Product } from './../../models/product';
import { ShoppingCart } from './../../models/shopping-cart';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css'],
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: Product;
  cart;
  subscription;

  constructor(private cartService: ShoppingCartService, private shoppingCart: ShoppingCart) {}

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  addToCard(product: Product) {
    this.cartService.addToCart(product);
  }

  getQuantity(product: Product) {
    this.shoppingCart.getQuantity(product);
  }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart()).subscribe(cart => (this.cart = cart));
  }
}
