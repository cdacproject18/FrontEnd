import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Address } from '../address';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  cust: Customer;
  add: Address;
  constructor(
    private custService: CustomerService,
    private dataService: DataService,
    private router: Router
  ) {}
  ngOnInit() {
    this.cust = JSON.parse(localStorage.getItem('curuser'));
  }
  onSave(name, email, number)     
  {
    console.log(name+ email+ number);
    this.cust.name = name;
    this.cust._id=email;
    this.cust.number=number;
    this.custService.custUpdate(this.cust).subscribe();
    //console.log(this.cust.name)
  }
}
