import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private LoginUri="eventaddaserver/customer/";

  constructor(private http:HttpClient) { }
  custlogin(email, pass):Observable<any>
  {
    const url=`${this.LoginUri}${email}/${pass}`
    return this.http.get(url);
  }

  custReg(cust:Customer):Observable<any>
  {
    return this.http.post(this.LoginUri,cust,{responseType:'text'});
  }

}