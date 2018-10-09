import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  products$: any;

 

  constructor(private db: AngularFireDatabase) {
    this.products$ = this.getAll();
  }

  getAll() {
    this.itemsRef = this.db.list('/products');
    return this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  delete(key) {
    this.itemsRef.remove(key);
  }
  ngOnInit() {}
}
