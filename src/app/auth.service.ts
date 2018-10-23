import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private afAuth: AngularFireAuth) {}

  login() {
    let provider = new firebase.auth.GoogleAuthProvider;
    provider.setCustomParameters({
      'prompt': 'select_account'
    });
    this.afAuth.auth.signInWithRedirect(provider);
    
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
