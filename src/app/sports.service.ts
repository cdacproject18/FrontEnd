import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SportsService {
  private sportsUrl= 'http://localhost:7070/eventaddaserver/event/list/sports';

  constructor(private http: HttpClient) { }

  getSports(): Observable<Event[]>{
    console.log('in get sports');
    return this.http.get<Event[]>(this.sportsUrl);
  }

}
