import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';
import { baseDomain } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  private sportsUrl = `${baseDomain}event/list/sports`;
  private sportsByIdUrl = `${baseDomain}event/`;
  constructor(private http: HttpClient) {}

  getSports(): Observable<Event[]> {
    console.log('in get sports');
    return this.http.get<Event[]>(this.sportsUrl);
  }

  getSportsById(id: string): Observable<Event> {
    console.log('in get sports by id');
    const url = `${this.sportsByIdUrl}${id}`;
    return this.http.get<Event>(url);
  }
}
