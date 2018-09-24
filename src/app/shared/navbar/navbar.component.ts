import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: firebase.User;

  constructor( private afAuth: AngularFireAuth ) {
    afAuth.authState.subscribe(user => this.user = user);
  }
  login(){
    this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
