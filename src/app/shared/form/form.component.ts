import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  txt;
  name;
  title;
  email;

  constructor(private db: AngularFireDatabase) { }
  save(msn){
    console.log(msn);
    this.db.list('/messages').push(msn);
    this.txt = "";
    this.name = "";
    this.title = "";
    this.email = "";
  }
  ngOnInit() {

  }

}
