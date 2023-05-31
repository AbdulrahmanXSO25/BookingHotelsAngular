import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/models';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotel: Hotel;

  constructor(private route: ActivatedRoute, private hotelsSerice:HotelsService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHotel(id);
  }

  getHotel(id:any) {
    this.hotelsSerice.getHotelById(id).subscribe({
      next: hotel => this.hotel = hotel,
      error: error => console.log(error)
    })
  }

}
