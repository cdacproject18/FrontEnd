import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { Customer } from '../customer';
import { Event } from '../event';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  customer: Customer;
  event: Event;
  ticket: Ticket[] = [];
  id: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private bookService: BookingService
  ) {}

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem('curuser'));
    this.id = this.dataService.id;
    this.event = this.dataService.event;
    if (!this.id || !this.customer) {
      this.router.navigate(['Home']);
    }
    this.bookService.getBookedTicket(this.id).subscribe(response => {
      this.ticket = response;
    });
  }
}
