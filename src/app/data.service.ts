import { Injectable } from '@angular/core';
import { Event } from './event';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 event: Event;
 customer: Customer;
 currentPage: string;
  
}
