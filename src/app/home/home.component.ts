import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.home = this.getHome();
  }

  getHome() {
    return this.config.getConfig().home;
  }
}
