import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';
import { Customer } from '../customer';
import { Event } from '../event';
import { ConcertsService } from '../concerts.service';
import { Venue } from '../venue';
import { Ticket } from '../ticket';
import { Section } from '../section';
import { SeatLocation } from '../seatlocation';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {
  booking: Booking;
  customer: Customer;
  event: Event;
  venue: Venue;
  section: Section[] = [];
  ticket: Ticket[] = [];
  seatLocation: SeatLocation[];

  constructor(
    private dataService: DataService,
    private router: Router,
    private bookService: BookingService,
    private concertService: ConcertsService
  ) {}

  ngOnInit() {
    console.log('in init Cancellation');
    this.customer = JSON.parse(localStorage.getItem('curuser'));
    this.booking = this.dataService.booking;
    if (!this.booking) {
      this.router.navigate(['Home']);
    }

    this.concertService.getConcertsById(this.booking.eventid).subscribe(response => {
      // set event
      this.event = response;
      this.bookService.getVenue(this.event.venueId).subscribe(resp => {
        // set venue
        this.venue = resp;
        // get sections
        this.venue.section.forEach(x => {
          this.bookService.getSection(x).subscribe(y => {
            this.section.push(y);
          });
        });
      });
    });

    this.bookService.getBookedTicket(this.booking._id).subscribe(response => {
      this.ticket = response;
      this.ticket.forEach(x => {
        this.seatLocation = x.seatlocation;
      });
    });
  }

  cancelBook() {
    console.log('here');
    this.seatLocation.forEach(x => {
      this.section
        .find(y => y.name === x.section)
        .seats.find(z => z.location === x.location).flag = false;
    });
    console.log('here 2');
    this.bookService.cancelBook(this.section, this.booking._id);
    console.log('here 3');
    this.router.navigate(['Home']);
  }
}
