import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../concerts.service';
import { Event } from '../event';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {
  events: Event[];
  constructor(private concertsService: ConcertsService) {}

  ngOnInit() {
    this.getConcerts();
  }

  getConcerts() {
    this.concertsService.getConcerts().subscribe(response => {
      this.events = response;
    });
  }
}
