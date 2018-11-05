import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  name: null;
  price: string;
  category: string;
  image: string;
  id: string;
  produRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    this.db.list('/products').push(product);
    this.name = null;
    this.price = null;
    this.category = null;
    this.image = null;
    this.id = null;
  }

  getAll() {
    this.produRef = this.db.list('/products');
    return this.items = this.produRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  get(id) {
    return this.db.object('/products/' + id);
  }

  update(id, product) {
    console.log(product.name);
    this.db.list('/products').update(id, product);
  }

  delete(key) {
    this.produRef.remove(key);
  }
}
