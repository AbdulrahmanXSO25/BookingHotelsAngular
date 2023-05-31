import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel, Booking, User } from 'src/app/models/models';
import { BookingsService } from '../bookings.service';
import { HotelsService } from 'src/app/hotel/hotels.service';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  hotel:Hotel;
  user:User;
  totalPrice: number = 0;

  bookingForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    hotelId: new FormControl(0, Validators.required),
    checkInDate: new FormControl(new Date, Validators.required),
    checkOutDate: new FormControl(new Date, Validators.required)
  });

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private bookingsService:BookingsService,
    private hotelService: HotelsService,
    private authService:AuthService,
    private toastService:ToastrService
  ) {
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    const hotelId = +this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotelById(hotelId).subscribe(res => {
      this.hotel = res;
      this.bookingForm.patchValue({ hotelId: this.hotel.id });
      this.calculatePrice();
    },
    err => {console.log(err)}
    );
  }

  createBooking(){

    let createdBooking:Booking = {
      name: this.bookingForm.value.firstName + " " + this.bookingForm.value.lastName,
      email: this.user.email,
      hotelName: this.hotel.name,
      checkInDate:  this.bookingForm.value.checkInDate.toString(),
      checkOutDate: this.bookingForm.value.checkOutDate.toString(),
      price: this.totalPrice
    }

    this.bookingsService.createBooking(this.bookingForm.value).subscribe({
      next: res => console.log(res),
      error: error => console.log(error)
    })

    this.toastService.success('Booking created successfully!');

    this.router.navigateByUrl('/');
  }


  calculatePrice(): void {
    const checkInDate = new Date(this.bookingForm.value.checkInDate);
    const checkOutDate = new Date(this.bookingForm.value.checkOutDate);

    if (checkInDate && checkOutDate && !isNaN(checkInDate.getTime()) && !isNaN(checkOutDate.getTime())) {
      const diffInDays = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
      this.totalPrice = diffInDays * this.hotel.priceOfNight;
    }
  }

}
