import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user: firebase.User;

  constructor(private auth: AuthService, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.user = user));
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
