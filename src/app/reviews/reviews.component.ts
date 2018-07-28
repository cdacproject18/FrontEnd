import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.reviews = this.getReviews();
  }

  getReviews() {
    return this.config.getConfig().reviews;
 }

}
