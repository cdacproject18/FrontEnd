import { SeatLocation } from "./seatlocation";

export class Ticket {
    bookingid: string;
    seatlocation: SeatLocation[];
    price: number;
}