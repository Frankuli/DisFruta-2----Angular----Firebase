import { ProductService } from './../../services/product.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnDestroy {

  products: Product[];
  subscription: Subscription;
  filterProducts: any[];


  constructor(private db: AngularFireDatabase, private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => {this.filterProducts = this.products = products});
  }

  filter(query: string) {
    this.filterProducts = (query) ?
      this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  delete(key) {
    if (confirm('Segure?')) {
      this.productService.delete(key);
    }
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
