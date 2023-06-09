import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../models/models';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHotelById(id: number) {
    return this.http.get<Hotel>(this.baseUrl + 'hotels/' + id);
  }

  getHotels() {
    return this.http.get<Hotel[]>(this.baseUrl + 'hotels');
  }

}
