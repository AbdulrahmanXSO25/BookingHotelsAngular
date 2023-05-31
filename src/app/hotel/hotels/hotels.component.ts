import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/models';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelsService:HotelsService) { }
  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    this.hotelsService.getHotels().subscribe({
      next: hotels => this.hotels = hotels,
      error: error => console.log(error)
    })
  }

}
