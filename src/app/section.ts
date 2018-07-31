import { Seat } from './seat';

export class Section {
  _id: string;
  name: string;
  noofseats: string;
  price: number;
  seats: Seat[];
}
