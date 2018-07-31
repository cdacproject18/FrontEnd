import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Venue } from '../venue';
import { BookingService } from '../booking.service';
import { Event } from '../event';
import { Section } from '../section';
import { Seat } from '../seat';
import { SeatLocation } from '../seatlocation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  event: Event;
  venue: Venue;
  price = 0;
  section: Section[] = [];
  selectedSection: Section = null;
  seat: Seat[] = [];
  selectedSeat: Seat = null;
  seatAdded: SeatLocation[] = [];

  constructor(
    private dataService: DataService,
    private bookService: BookingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.event = this.dataService.event;
    if (!this.event) {
      this.router.navigate(['Home']);
    }

    this.bookService.getVenue(this.event.venueId).subscribe(response => {
      this.venue = response;
      this.venue.section.forEach(obj => {
        this.bookService.getSection(obj).subscribe(resp => {
          this.section.push(resp);
        });
      });
    });
  }

  updateSection() {
    console.log(this.selectedSection.name);
    this.seat = [];
    this.selectedSeat = null;
    this.selectedSection.seats.forEach(obj => {
      if (!obj.flag) {
        this.seat.push(obj);
      }
    });
    console.log(this.seat.length);
  }

  add() {
    // Return if no seat is selected
    if (!this.selectedSeat) {
      return;
    }

    // add seat to booked list
    this.seatAdded.push(new SeatLocation(this.selectedSection.name, this.selectedSeat.location));

    // change seat status
    this.selectedSection.seats.find(x => x.location === this.selectedSeat.location).flag = true;

    this.price += this.selectedSection.price;

    this.updateSection();
    console.log('Seat added');
  }

  remove(s: SeatLocation) {
    const index = this.seatAdded.indexOf(s);
    if (index !== -1) {
      // remove seat from booked list
      this.seatAdded.splice(index, 1);

      // change seat status
      const sec: Section = this.section.find(x => x.name === s.section);
      sec.seats.find(y => y.location === s.location).flag = false;
      this.price -= sec.price;
      this.updateSection();
      console.log('Seat removed');
    }
  }

  bookTicket() {
    if (this.seatAdded.length < 1) {
      return;
    }

    this.bookService.bookIt(
      this.section,
      this.seatAdded,
      this.price,
      JSON.parse(localStorage.getItem('curuser'))._id,
      this.event._id
    );
    this.router.navigate(['Home']);
  }
}
