export class Position {
  latitude: number;
  longitude: number;
  timestamp: number;

  constructor(lat: number, long: number) {
    this.latitude = lat;
    this.longitude = long;
    this.timestamp = Date.now();
  }
}
