import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Venue } from './venue';
import { Section } from './section';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  venueUrl= 'http://localhost:7070/eventaddaserver/venue';
  sectionUrl = "http://localhost:7070/eventaddaserver/section"
  constructor(private http: HttpClient) { }

  getVenue(id: String): Observable<Venue>
  {
    const url=`${this.venueUrl}/${id}`;
    return this.http.get<Venue>(url);
  }

  getSection(id: String): Observable<Section> {
    const url = `${this.sectionUrl}/${id}`;
    return this.http.get<Section>(url);
  }
}
