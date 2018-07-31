import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SportsComponent } from './sports/sports.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { ConcertsdetailsComponent } from './concertsdetails/concertsdetails.component';
import { SportsdetailsComponent } from './sportsdetails/sportsdetails.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Concerts', component: ConcertsComponent },
  { path: 'Reviews', component: ReviewsComponent },
  { path: 'Sports', component: SportsComponent },
  { path: 'concertsdetails/:id', component: ConcertsdetailsComponent },
  { path: 'sportsdetails/:id', component: SportsdetailsComponent },
  { path: 'Booking', component: BookingComponent },
  { path: 'Login', component: LoginComponent },
  {path: 'Profile', component:ProfileComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
