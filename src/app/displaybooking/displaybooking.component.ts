import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Customer } from '../customer';
import { ConcertsService } from '../concerts.service';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-displaybooking',
  templateUrl: './displaybooking.component.html',
  styleUrls: ['./displaybooking.component.css']
})
export class DisplaybookingComponent implements OnInit {
  booking: Booking[];
  customer: Customer;

  constructor(private dataService: DataService, private router: Router, private bookService: BookingService) {}

  ngOnInit() {
    console.log('in init display booking');
    this.customer = JSON.parse(localStorage.getItem('curuser'));
    if (!this.customer) {
      this.router.navigate(['Login']);
    }
    this.bookService.getBookingById(this.customer._id).subscribe(resp => {
      this.booking = resp;
    });
  }

  cancelBooking(b: Booking) {
    this.dataService.booking = b;
    this.router.navigate(['Cancel']);
  }
}
