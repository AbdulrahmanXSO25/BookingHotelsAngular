import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot([]),
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class CoreModule { }
