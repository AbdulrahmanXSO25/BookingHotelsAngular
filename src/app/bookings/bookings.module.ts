import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BookingsRoutingModule } from './bookings-routing.module';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CreateBookingComponent,
    BookingsListComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [    DatePipe  ]
})
export class BookingsModule { }
