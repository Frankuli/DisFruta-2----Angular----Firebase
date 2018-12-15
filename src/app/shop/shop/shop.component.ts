import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  branRef: AngularFireList<any>;
  brans: Observable<any[]>;
  branch$;
  constructor(private db: AngularFireDatabase) {
    this.branch$ = this.getAll();
   }

  getAll() {
    this.branRef = this.db.list('/branch');
    return (this.brans = this.branRef
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))));
  }
}
