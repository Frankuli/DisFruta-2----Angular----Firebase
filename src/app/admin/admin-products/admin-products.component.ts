import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products$: any;

  constructor(private db: AngularFireDatabase) {
    this.products$ = this.getAll();
  }

  getAll() {
    //return this.db.list('/products').valueChanges();

  }

  ngOnInit() {}
}
