import { StockService } from './../../services/stock.service';
import { ShoppingCart } from 'src/app/models/shopping-cart';
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
  cart: ShoppingCart;
  subscription;
  stock$;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private stockService: StockService){
      this.stock$ = stockService.getAll();
    }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
  }

  addToCard(product: Product) {
    this.cartService.addToCart(product);
  }

  getQuantity(product: Product) {
    if (!this.cart) return 0;
    let item = this.cart.itemsMap[product.key];
    return item ? item.quantity : 0;
  }

  private applyFilter(){
    this.filterProducts = (this.category) ?
    this.products.filter(p => p.category === this.category) :
    this.products

  }

  private populateProducts(){
    this.productService
      .getAll()
      .pipe(switchMap(products => {
        this.products = products;
        return this.router.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }
  async ngOnInit() {
    this.subscription = (await this.cartService.getCart())
      .subscribe(cart => this.cart = cart);

    this.populateProducts();

  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
