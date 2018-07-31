import { Component, OnInit, OnDestroy } from '@angular/core';
import { SportsService } from '../sports.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event';
import { DataService } from '../data.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-sportsdetails',
  templateUrl: './sportsdetails.component.html',
  styleUrls: ['./sportsdetails.component.css']
})
export class SportsdetailsComponent implements OnInit, OnDestroy {
  sport: Event;
  id: string;

  constructor(
    private sportsService: SportsService,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    console.log('in sportsdetails init');
    this.getSportsById();
  }

  ngOnDestroy() {
    console.log('destroyed');
    this.dataService.event = this.sport;
    this.dataService.currentPage = `sportsdetails/${this.id}`;
  }

  getSportsById() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sportsService.getSportsById(this.id).subscribe(response => {
      this.sport = response;
    });
  }

  checkLogin() {
    const cust: Customer = JSON.parse(localStorage.getItem('curuser'));
    if (cust) {
      this.router.navigate(['Booking']);
    } else {
      this.router.navigate(['Login']);
    }
  }
}
