import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';



@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;

  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    console.log(product.price);
    // let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.$key);
    // item$.take(1).subscribe(item => {
    //   if (item.$exists()) item$.update({ quantity: item.quantity + 1 });
    //   else item$.set({ product: product, quantity: 1 });
    // })
  }

}