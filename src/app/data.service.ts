import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  event: Event;
  currentPage: string;
}
