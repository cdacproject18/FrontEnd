import { Injectable } from '@angular/core';
import { Event } from './event';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  event: Event;
  currentPage: string;
  booking: Booking;
  id: string;
}
