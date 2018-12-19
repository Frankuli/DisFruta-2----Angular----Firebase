import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  branRef: AngularFireList<any>;
  brans: Observable<any[]>;
  branch$;
  constructor(private db: AngularFireDatabase){}

  getAll() {
    this.branRef = this.db.list('/branch');
    return (this.brans = this.branRef
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))));
  }
}

