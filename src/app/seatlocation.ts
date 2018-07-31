export class SeatLocation {
  section: string;
  location: string;

  constructor(id: string, loc: string) {
    this.section = id;
    this.location = loc;
  }
}
