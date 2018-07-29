import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  events: Event[];
  constructor(private sportsService: SportsService) { }

  ngOnInit() {
    console.log('inside init');
    this.getSports();
  }

  getSports(){
    this.sportsService.getSports().subscribe(response => {
      this.events=response;
    });
    console.log(this.events.length);
  }

}
