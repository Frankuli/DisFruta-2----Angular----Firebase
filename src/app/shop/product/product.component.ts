import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  produRef: AngularFireList<any>;
  items: Observable<any[]>;
  products: Product[];
  filterProducts: Product[];
  categories$;
  catRef: AngularFireList<any>;
  cats: Observable<any[]>;
  category: string;


  getAll() {
    this.produRef = this.db.list('/products');
    return (this.items = this.produRef
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))));
  }
  getCategories() {
    this.catRef = this.db.list('/categories');
    return (this.cats = this.catRef
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))));
  }


  constructor(private db: AngularFireDatabase, router: ActivatedRoute) {
    
    this.getAll().pipe().subscribe( products => {
      this.products = products;
      //console.log(this.products);
      this.categories$ = this.getCategories();

      router.queryParamMap.subscribe(params => {
        this.category = params.get('category');

       // console.log(this.category);
        //console.log(this.products);
        this.filterProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products
      });
    });
    //console.log(this.products);


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
