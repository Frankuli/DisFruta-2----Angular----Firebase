import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  produRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  getAll() {
    this.produRef = this.db.list('/stockLocal');
    return (this.items = this.produRef
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))));
  }
}
