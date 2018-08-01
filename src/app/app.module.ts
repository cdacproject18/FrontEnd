import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SportsComponent } from './sports/sports.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConcertsService } from './concerts.service';
import { SportsService } from './sports.service';
import { SportsdetailsComponent } from './sportsdetails/sportsdetails.component';
import { ConcertsdetailsComponent } from './concertsdetails/concertsdetails.component';
import { CustomerService } from './customer.service';
import { BookingComponent } from './booking/booking.component';
import { BookingService } from './booking.service';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { CancellationComponent } from './cancellation/cancellation.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplaybookingComponent } from './displaybooking/displaybooking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    SportsComponent,
    ConcertsComponent,
    ReviewsComponent,
    AboutComponent,
    SportsdetailsComponent,
    ConcertsdetailsComponent,
    BookingComponent,
    CancellationComponent,
    ProfileComponent,
    DisplaybookingComponent,
    ConfirmationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ConcertsService, SportsService, CustomerService, BookingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
