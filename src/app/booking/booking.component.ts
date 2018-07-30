import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Venue } from '../venue';
import { BookingService } from '../booking.service';
import { Event } from '../event';
import { Section } from '../section';
import { Seat } from '../seat';
import { SeatLocation } from '../seatlocation';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  event: Event;
  venue: Venue;
  section: Section[] = [];
  selectedSection: Section = null;
  seat: Seat[] = [];
  selectedSeat: Seat = null;
  seatAdded: SeatLocation[] = [];

  constructor(private dataService: DataService, private bookService: BookingService) { }

  ngOnInit() {
    this.event=this.dataService.event;
    this.bookService.getVenue(this.event.venueId).subscribe( response =>{
      this.venue= response;
      this.venue.section.forEach(obj => {
        this.bookService.getSection(obj).subscribe(resp => {
          this.section.push(resp);
        })
      })
    });
  }

  updateSection(){
    console.log(this.selectedSection.name);
    this.seat = this.selectedSection.seats;
    console.log(this.seat.length);
  }

  updateSeat() {
    console.log(this.selectedSeat.location);
  }

  add(){
    this.seatAdded.push(new SeatLocation(this.selectedSection.name, this.selectedSeat.location));
    console.log("Seat added");
  }

  remove(s: SeatLocation) {
    const index = this.seatAdded.indexOf(s);
    if(index != -1)
      this.seatAdded.splice(index, 1);
  }
}
