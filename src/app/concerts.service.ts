import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {
  private eventUrl = 'http://localhost:7070/eventaddaserver/event/list/';
  private concertsUrl = 'http://localhost:7070/eventaddaserver/event/list/concerts';
  private concertByIdUrl = 'http://localhost:7070/eventaddaserver/event/';
  constructor(private http: HttpClient) {}

  getConcerts(): Observable<Event[]> {
    console.log('in get concerts');
    return this.http.get<Event[]>(this.concertsUrl);
  }
  getConcertsById(id: String): Observable<Event> {
    console.log('in get concert by id ');
    const url = `${this.concertByIdUrl}${id}`;
    return this.http.get<Event>(url);
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventUrl);
  }
}
