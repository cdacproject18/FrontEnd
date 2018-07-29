import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../customer.service";
import { Customer } from '../customer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cust:Customer;
  
  constructor(private custService:CustomerService) 
  {}
  ngOnInit() {}
  onSubmitLogin(email, pass)
  {
   this.custService.custlogin(email,pass).subscribe();
  }
  
  onSubmitReg(regname,email,num, regcity, regstreet, regstate,pass,gen,date)
  {
    this.cust = {_id:email,name:regname,number:num,password:pass,dob:date,gender:gen,address:{city:regcity,state:regstate,street:regstreet}};
    this.custService.custReg(this.cust).subscribe();
    //console.log(name+ email);
    //console.log(num+ city + street+ state+ pass+gen+date);
  }

}
