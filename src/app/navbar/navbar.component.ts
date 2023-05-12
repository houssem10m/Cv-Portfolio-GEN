import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isFixedNavbar = false;
  isLoggedIn: any;
  constructor(private userService: AuthService) {
    this.isLoggedIn = userService.isLoggedIn();
  }

  ngOnInit(): void {}
  Signout() {
    this.userService.SignoutUser();
  }
}
