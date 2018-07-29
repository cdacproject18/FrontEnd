import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sportsdetails',
  templateUrl: './sportsdetails.component.html',
  styleUrls: ['./sportsdetails.component.css']
})
export class SportsdetailsComponent implements OnInit {
 sport: Event;
  constructor(private sportsService: SportsService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("in sportsdetails init");
    this.getSportsById();
  }

  getSportsById()
  {
    const id= this.route.snapshot.paramMap.get('id');
    this.sportsService.getSportsById(id).subscribe(response=>{
      this.sport = response;
    });
  } 
}
