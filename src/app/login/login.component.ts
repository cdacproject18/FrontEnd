import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cust: Customer;

  constructor(
    private custService: CustomerService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cust = JSON.parse(localStorage.getItem('curuser'));
  }

  onSubmitLogin(email, pass) {
    console.log(email + pass);
    this.custService.custlogin(email, pass).subscribe(response => {
      this.cust = response;
      localStorage.setItem('curuser', JSON.stringify(response));
      this.router.navigate([this.dataService.currentPage]);
    });
  }

  onSubmitReg(regname, email, num, regcity, regstreet, regstate, pass, gen, date) {
    this.cust = {
      _id: email,
      name: regname,
      number: num,
      password: pass,
      dob: date,
      gender: gen,
      address: { city: regcity, state: regstate, street: regstreet }
    };
    this.custService.custReg(this.cust).subscribe();
    // console.log(name+ email);
    // console.log(num+ city + street+ state+ pass+gen+date);
  }

  logout() {
    localStorage.setItem('curuser', null);
    this.cust = null;
    this.router.navigate(['Home']);
  }
}
