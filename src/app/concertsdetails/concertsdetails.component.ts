import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../concerts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-concertsdetails',
  templateUrl: './concertsdetails.component.html',
  styleUrls: ['./concertsdetails.component.css']
})
export class ConcertsdetailsComponent implements OnInit {
  concert: Event;

  constructor(private concertsService: ConcertsService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("in concertdetails init");
    this.getConcertById();
  }

  getConcertById()
  {
    const id= this.route.snapshot.paramMap.get('id');
    this.concertsService.getConcertsById(id).subscribe(response=>{
      this.concert = response;
    });
  } 

}
