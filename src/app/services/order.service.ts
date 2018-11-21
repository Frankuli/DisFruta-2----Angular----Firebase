import { map } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  produRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor( private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService ) { }

  async placeOrder(order){
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getAll(){
    this.produRef = this.db.list('/orders');
    return this.items = this.produRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId)).snapshotChanges();
  }
}
