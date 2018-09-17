import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  producs: any;

  constructor() {
    this.producs = [
      {
        "name": "Manzana",
        "stock": 0,
        "price": 50,
        "image": "/assets/img2/manzanaRoja.jpg"
      },
      {
        "name": "Pera",
        "stock": 10,
        "price": 55,
        "image": "/assets/img2/pera.jpg"
      },
      {
        "name": "Cebolla",
        "stock": 0,
        "price": 20,
        "image": "/assets/img2/cebolla.jpg"
      }
    ]
  }
  ngOnInit() {
  }

}
