import { AppUser } from './../../models/user';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping-cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  isNavbarCollapsed: boolean = true;

  constructor(
    public auth: AuthService,
    private shoppingCartService: ShoppingCartService ) {

  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  collapsed() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }


  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser)
    this.cart$ = await this.shoppingCartService.getCart();
  }
}
