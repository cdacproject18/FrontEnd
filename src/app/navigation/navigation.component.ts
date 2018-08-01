import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  activetab = 'home';
  cust: Customer;
  regCust: Customer;
  id: string;
  password: string;

  constructor(private custService: CustomerService, private router: Router) {}

  ngOnInit() {
    this.cust = JSON.parse(localStorage.getItem('curuser'));
    this.regCust = new Customer();
  }

  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }

  onSubmitLogin() {
    if (!this.id || !this.password) {
      alert('Fields cant be empty');
      return;
    }
    this.custService.custlogin(this.id, this.password).subscribe(response => {
      localStorage.setItem('curuser', JSON.stringify(response));
      window.location.reload();
    });
  }

  onSubmitReg() {
    this.custService.custReg(this.regCust).subscribe(res => {
      alert('Registered ' + this.regCust._id + '\nLogin to Continue');
      window.location.reload();
    });
  }

  logout() {
    localStorage.setItem('curuser', null);
    this.cust = null;
    alert('Logged Out');
    this.router.navigate(['Home']);
  }
}
