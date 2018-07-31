import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';
import { Event } from '../event';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  events: Event[] = [];
  constructor(private sportsService: SportsService) {}

  ngOnInit() {
    this.getSports();
  }

  getSports() {
    this.sportsService.getSports().subscribe(response => {
      this.events = response;
    });
  }
}
