import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../models/product';
import { switchMap } from 'rxjs/operators';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy{
  products: Product[] = [];
  filterProducts: Product[] = [];
  category: string;
  cart;
  subscription;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService){

    productService
    .getAll()
    .pipe(switchMap( products => {
      this.products = products;
      return router.queryParamMap;
    }))
      .subscribe(params => {
        this.category = params.get('category');

        this.filterProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products
      });

  }
  addToCard(product: Product) {
    this.cartService.addToCart(product);
  }

  getQuantity(product: Product) {
    if (!this.cart) return 0;
    let item = this.cart.items[product.key];
    return item ? item.quantity : 0;
  }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart()).valueChanges()
      .subscribe(cart => (this.cart = cart));
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
