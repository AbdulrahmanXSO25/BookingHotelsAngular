import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  baseUrl = 'https://localhost:7231/api/';

  constructor(private http: HttpClient) { }

  getHotelById(id: number) {
    return this.http.get<Hotel>(this.baseUrl + 'hotels/' + id);
  }

  getHotels() {
    return this.http.get<Hotel[]>(this.baseUrl + 'hotels');
  }

}
