import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
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
  producto;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private storage: AngularFireStorage, private router: Router) {


    //if(id) this.get(id).subscribe(p => this.productx = p);
  }
  downloadURL: Observable<string>;
  create(product) {
    //console.log(product);
    // (this.product.id) ? this.producto.update(this.product) :
    this.db.list('/products').push(product);
    this.name = null;
    this.price = null;
    this.category = null;
    this.image = null;
    this.id = null;
  }
  get(id){
    return this.db.object('/products/'+id);
  }
  update(id, product){
    console.log(product.name);
    this.db.list('/product/').update(id,{name: product.name, price: product.price});
  }
  save(product) {
    console.log(product);
    // let urlImage;
    // this.downloadURL.subscribe(url => {
    //   urlImage = url;
    // });
    // console.log(urlImage);
    let id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.update(id, product);
    else
      this.create(product);
    this.router.navigate(['/admin/products']);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = moment().format();
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    )
      .subscribe()
  }


  ngOnInit(){
    this.route.paramMap
    .subscribe( params => {
      let id = params.get('id');
      if(id){
        this.producto =this.db.object('/products/' + id).valueChanges();
        this.producto
          .subscribe(product => {
            this.name = product.name;
            this.price = product.price;
            this.category = product.category;
            this.image = product.image;
            this.id = id;
          })
      }
    })
    //this.product = this.db.
  }
}
