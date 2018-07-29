import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SportsService {
  private sportsUrl= 'http://localhost:7070/eventaddaserver/event/list/sports';
  private sportsByIdUrl='http://localhost:7070/eventaddaserver/event/'
  constructor(private http: HttpClient) { }

  getSports(): Observable<Event[]>{
    console.log('in get sports');
    return this.http.get<Event[]>(this.sportsUrl);
  }

  getSportsById(id: string): Observable<Event>{
    console.log('in get sports by id');
    const url=`${this.sportsByIdUrl}${id}`
    return this.http.get<Event>(url);
  }

}
