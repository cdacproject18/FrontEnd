import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Venue } from './venue';
import { Section } from './section';
import { SeatLocation } from './seatlocation';
import { Ticket } from './ticket';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  venueUrl = 'http://localhost:7070/eventaddaserver/venue';
  sectionUrl = 'http://localhost:7070/eventaddaserver/section/';
  bookUrl = 'http://localhost:7070/eventaddaserver/booking/';
  ticketUrl = 'http://localhost:7070/eventaddaserver/ticket/';

  ticket: Ticket;
  booking: Booking;

  constructor(private http: HttpClient) {}

  getVenue(id: String): Observable<Venue> {
    const url = `${this.venueUrl}/${id}`;
    return this.http.get<Venue>(url);
  }

  getSection(id: String): Observable<Section> {
    const url = `${this.sectionUrl}/${id}`;
    return this.http.get<Section>(url);
  }

  bookIt(section: Section[], seatBooked: SeatLocation[], pr: number, cusId: string, eveId: string) {
    const id = `${cusId}${eveId}${pr}`;
    console.log(cusId + ' : ' + seatBooked.length + eveId + ' : ' + cusId);

    this.getBook(id, eveId, cusId, seatBooked).subscribe(res => console.log(res));
    this.getTicket(id, seatBooked, pr).subscribe(res => console.log(res));

    section.forEach(x => this.updateSection(x).subscribe(res => console.log(res)));
  }

  updateSection(x: Section): Observable<any> {
    return this.http.put(this.sectionUrl, x, { responseType: 'text' });
  }

  getTicket(id, seatBooked, pr): Observable<any> {
    this.ticket = {
      bookingid: id,
      seatlocation: seatBooked,
      price: pr
    };
    return this.http.post(this.ticketUrl, this.ticket, {
      responseType: 'text'
    });
  }

  getBook(id, eveId, cusId, seatBooked): Observable<any> {
    this.booking = {
      _id: id,
      timestamp: new Date(),
      paymentstatus: true,
      eventid: eveId,
      customerid: cusId,
      nooftickets: seatBooked.length.toString()
    };

    return this.http.post(this.bookUrl, this.booking, { responseType: 'text' });
  }

  getBookingById(id: string): Observable<Booking[]> {
    const url = `${this.bookUrl}customer/${id}`;
    return this.http.get<Booking[]>(url);
  }

  getBookedTicket(id: string): Observable<Ticket[]> {
    const url = `${this.ticketUrl}${id}`;
    return this.http.get<Ticket[]>(url);
  }

  cancelBook(section: Section[], ticket: Ticket[], booking: Booking) {

  }

  delTicket(ticket: Ticket): Observable<any> {
    this.http.delete(this.ticketUrl, ticke);
  }
}
