import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  categories$;
  catRef: AngularFireList<any>;
  cats: Observable<any[]>;

  getCategories() {
    this.catRef = this.db.list('/categories');
    return (this.cats = this.catRef
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))));
  }
  constructor(private db: AngularFireDatabase) {
    this.categories$ = this.getCategories();
  }

  ngOnInit() {}
}
