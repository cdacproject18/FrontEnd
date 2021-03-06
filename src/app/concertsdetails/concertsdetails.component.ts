import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConcertsService } from '../concerts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Event } from '../event';
import { Customer } from '../customer';

@Component({
  selector: 'app-concertsdetails',
  templateUrl: './concertsdetails.component.html',
  styleUrls: ['./concertsdetails.component.css']
})
export class ConcertsdetailsComponent implements OnInit, OnDestroy {
  concert: Event;
  id: String;

  constructor(
    private concertsService: ConcertsService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('in concertdetails init');
    this.concert = new Event();
    this.getConcertById();
  }

  ngOnDestroy() {
    console.log('destroyed');
    this.dataService.event = this.concert;
    this.dataService.currentPage = `concertsdetails/${this.id}`;
  }

  getConcertById() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.concertsService.getConcertsById(this.id).subscribe(response => {
      this.concert = response;
    });
  }

  checkLogin() {
    const cust: Customer = JSON.parse(localStorage.getItem('curuser'));
    if (cust) {
      this.router.navigate(['Booking']);
    } else {
      alert('Login to continue');
    }
  }
}
