import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private afAuth: AngularFireAuth ) {

  }
  ngOnInit() {
  }
  login(){
    this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
  }
}
