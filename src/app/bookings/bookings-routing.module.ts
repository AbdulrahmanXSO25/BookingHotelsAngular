import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';

const routes: Routes = [
  { path: 'book/:id', component: CreateBookingComponent },
  { path: '', component: BookingsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
