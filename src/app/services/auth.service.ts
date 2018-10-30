import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$:Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth, private router: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.router.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    
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
