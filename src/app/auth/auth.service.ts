import { Injectable } from '@angular/core';
import { ReplaySubject, map, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl = 'https://localhost:7231/api/';

  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}

  loadCurrentUser(token: string | null) {
    if (token == null) {
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get<User>(this.baseUrl + 'accounts', { headers }).pipe(
      map(user => {
        if (user) {
          this.cookieService.set('token', user.token); // Save token in cookie
          this.currentUserSource.next(user);
          return user;
        } else {
          return null;
        }
      })
    );
  }

  login(values: any) {
    return this.http.post<User>(this.baseUrl + 'accounts/login', values).pipe(
      map(user => {
        this.cookieService.set('token', user.token); // Save token in cookie
        this.currentUserSource.next(user);
      })
    );
  }

  register(values: any) {
    return this.http.post<User>(this.baseUrl + 'accounts/register', values).pipe(
      map(user => {
        this.cookieService.set('token', user.token); // Save token in cookie
        this.currentUserSource.next(user);
      })
    );
  }

  logout() {
    this.cookieService.delete('token'); // Remove token from cookie
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

}
