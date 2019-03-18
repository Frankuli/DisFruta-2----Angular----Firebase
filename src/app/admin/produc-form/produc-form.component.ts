import { UnitService } from './../../services/unit.service';
import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-produc-form',
  templateUrl: './produc-form.component.html',
  styleUrls: ['./produc-form.component.css'],
})
export class ProducFormComponent implements OnInit {
  name: null;
  price: string;
  category: string;
  image: string;
  id: string;
  quantity: string;
  unit: string;
  producto;
  downloadURL: Observable<string>;
  categories$;
  unit$;

  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private storage: AngularFireStorage,
    private router: Router,
    private categoryService: CategoryService,
    private unitService: UnitService,
    private productService: ProductService) {

    this.categories$ = categoryService.getAll();
    this.unit$ = unitService.getAll();

  }

  save(product) {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.productService.update(id, product);
    else this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = moment().format();
    this.image = filePath;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = fileRef.getDownloadURL())))
      .subscribe();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if (id) {
        this.producto = this.db.object('/products/' + id).valueChanges();
        this.producto.subscribe(product => {
          this.name = product.name;
          this.price = product.price;
          this.category = product.category;
          this.image = product.image;
          this.quantity = product.quantity;
          this.unit = product.unit;
          this.id = id;
        });
      }
    });
    //this.product = this.db.
  }
}
