import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-produc-form',
  templateUrl: './produc-form.component.html',
  styleUrls: ['./produc-form.component.css'],
})
export class ProducFormComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {

  }
  create(product) {
    this.db.list('/products').push(product);
  }
  save(product) {
    console.log(product);
    this.create(product);
  }

  ngOnInit() {}
}
