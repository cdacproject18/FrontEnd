import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';
import { Customer } from '../customer';
import { Event } from '../event';
import { ConcertsService } from '../concerts.service';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {
  booking: Booking[];
  customer: Customer;
  event: Event[];

  constructor(private dataService: DataService,
    private router: Router,
    private bookService: BookingService,
    private concertService: ConcertsService
  ) { }

  ngOnInit() {
    console.log('in init Cancellation');
    this.customer = JSON.parse(localStorage.getItem('curuser'));
    if (!this.customer) {
      this.router.navigate(['Login']);
    }
    this.bookService.getBookingById(this.customer._id)
      .subscribe(resp => {
        this.booking = resp;
        this.booking.forEach(x => {
          this.concertService.getConcertsById(x.eventid).subscribe(res => {
            this.event.push(res);
          });
        });
      });
  }

}
