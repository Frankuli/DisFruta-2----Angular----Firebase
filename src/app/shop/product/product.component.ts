import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  producs: any;
  produRef: AngularFireList<any>;
  items: Observable<any[]>;
  products$: any;



  getAll() {
    this.produRef = this.db.list('/products');
    return (this.items = this.produRef
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))));
  }


  constructor(private db: AngularFireDatabase) {
    this.products$ = this.getAll();

  }
  //   this.producs = [
  //     {
  //       name: 'Manzana',
  //       stock: 0,
  //       price: 50,
  //       image: '/assets/img2/manzanaRoja.jpg',
  //     },
  //     {
  //       name: 'Pera',
  //       stock: 10,
  //       price: 55,
  //       image: '/assets/img2/pera.jpg',
  //     },
  //     {
  //       name: 'Cebolla',
  //       stock: 0,
  //       price: 20,
  //       image: '/assets/img2/cebolla.jpg',
  //     },
  //   ];

  ngOnInit() {}
}
