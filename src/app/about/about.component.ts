import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  intro = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.intro = this.getIntro();
  }

  getIntro() {
    return this.config.getConfig().intro;
  }
}
