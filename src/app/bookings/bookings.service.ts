import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/models';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  baseUrl = environment.apiUrl;

  token;

  constructor(private http: HttpClient, private cookiesService:CookieService) {
    this.token = this.cookiesService.get('token');
  }

  createBooking(booking: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(this.baseUrl + 'bookings', booking, { headers });
  }

  getBookingsByEmail() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Booking[]>(this.baseUrl + 'bookings', { headers });
  }
}
