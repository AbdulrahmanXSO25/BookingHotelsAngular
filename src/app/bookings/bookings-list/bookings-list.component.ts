import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { Booking } from 'src/app/models/models';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})

export class BookingsListComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingsService.getBookingsByEmail().subscribe(
      bookings => {
        this.bookings = bookings;
      },
      error => {
        console.error('Error retrieving bookings:', error);
      }
    );
  }

  getNumberOfDays(checkInDateStr: string, checkOutDateStr: string): number {
    let checkInDate = new Date(checkInDateStr);
    let checkOutDate = new Date(checkOutDateStr);
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    // Calculate the difference in days
    const diffDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay));

    return diffDays;
  }
}
