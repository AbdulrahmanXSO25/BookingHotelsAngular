import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private authService: AuthService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = this.cookieService.get('token');
    if(token) this.authService.loadCurrentUser(token).subscribe();
    else console.log('no tokens');
  }

  title = 'hotel-booking-app';
}
