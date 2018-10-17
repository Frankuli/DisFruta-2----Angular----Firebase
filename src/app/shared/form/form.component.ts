import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  save(msn){
    console.log(msn);
    this.db.list('/messages').push(msn);
  }
  ngOnInit() {
  }

}
