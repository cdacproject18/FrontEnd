import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../concerts.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  events: Event[];
  constructor(private concertsService: ConcertsService) { }

  ngOnInit() {
    console.log('inside init');
    this.getConcerts();
  }

  getConcerts(){
    this.concertsService.getConcerts().subscribe(response => {
      this.events = response;
    });
  }

}
