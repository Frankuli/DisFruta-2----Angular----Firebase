import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  produRef: AngularFireList<any>;
  items: Observable<any[]>;
  products: any[];
  subscription: Subscription;
  filterProducts: any[];


  constructor(private db: AngularFireDatabase) {
    this.subscription = this.getAll()
      .subscribe(products => this.filterProducts = this.products = products);
  }

  filter(query: string){
    this.filterProducts = (query)  ?
      this.products.filter(p => p.payload.val()['title'].toLowerCase().includes(query.toLowerCase())) :
      this.products;

  }

  getAll() {
    this.produRef = this.db.list('/products');
    return this.items = this.produRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  delete(key) {
    this.produRef.remove(key);
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {}
}
