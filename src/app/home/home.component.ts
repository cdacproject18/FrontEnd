import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../concerts.service';
import { Event } from '../event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  event: Event[] = [];

  constructor(private concertService: ConcertsService, private router: Router) {}

  ngOnInit() {
    this.concertService.getAllEvents().subscribe(response => {
      this.event = response;
    });
  }

  getEvent(e: Event) {
    if (e.categoryId === '101') {
      this.router.navigate([`concertsdetails/${e._id}`]);
    } else {
      this.router.navigate([`sportsdetails/${e._id}`]);
    }
  }
}
