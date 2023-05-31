import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, public authService:AuthService) {}

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  notHomePage(): boolean {
    return this.router.url.includes('hotel') || this.router.url.includes('bookings');
  }

  inAuthModule(): boolean {
    return this.router.url.includes('auth');
  }

  logout() {
    this.authService.logout();
  }
}
