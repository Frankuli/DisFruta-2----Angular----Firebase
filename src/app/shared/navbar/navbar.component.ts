import { appUser } from './../../models/user';
import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  appUser: appUser;

  constructor(public auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
