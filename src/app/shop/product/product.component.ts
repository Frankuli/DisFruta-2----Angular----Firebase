import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../models/product';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent{
  products: Product[] = [];
  filterProducts: Product[] = [];
  categories$;
  category: string;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private categoryService: CategoryService){

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

    this.categories$ = this.categoryService.getAll();
  }
  addToCard(product: Product) {
    this.cartService.addToCart(product);


  }
}
