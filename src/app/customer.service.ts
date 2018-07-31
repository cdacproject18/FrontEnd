import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private LoginUri = 'http://localhost:7070/eventaddaserver/customer/';
  constructor(private http: HttpClient) {}
  custlogin(email, pass): Observable<any> {
    const url = `${this.LoginUri}${email}/${pass}`;
    return this.http.get(url);
  }

  custReg(cust: Customer): Observable<any> {
    console.log(cust.name);
    return this.http.post(this.LoginUri, cust, { responseType: 'text' });
  }

  custUpdate(cust: Customer): Observable<any>     //harshal
  {
    console.log(cust.name);
    return this.http.put(this.LoginUri,cust,{responseType:'text'});
  }

}
