import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { SportsComponent } from "./sports/sports.component";
import { ConcertsComponent } from "./concerts/concerts.component";
import { LoginComponent } from "./login/login.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from ".//app-routing.module";
import { ConcertsService } from "./concerts.service";
import { SportsService } from "./sports.service";
import { CustomerService } from "./customer.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    SportsComponent,
    ConcertsComponent,
    LoginComponent,
    ReviewsComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ConcertsService, SportsService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
