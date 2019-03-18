import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  catRef: AngularFireList<any>;
  cats: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  getAll() {
    this.catRef = this.db.list('/unit');
    return (this.cats = this.catRef
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))));
  }
}
