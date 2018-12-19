import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root',
})
export class SendService {
  constructor(private db: AngularFireDatabase){}

  async placeSend(send) {
    let result = await this.db.list('/envios').push(send);
    return result;
  }
}
