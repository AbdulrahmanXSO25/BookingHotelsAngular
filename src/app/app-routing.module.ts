import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { canActivate } from './auth/auth.guard';

const routes: Routes = [
  {path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'hotels', loadChildren: ()=> import('./hotel/hotel.module').then(m => m.HotelModule)},
  {path: 'bookings', loadChildren: ()=> import('./bookings/bookings.module').then(m => m.BookingsModule), canActivate: [canActivate]},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
