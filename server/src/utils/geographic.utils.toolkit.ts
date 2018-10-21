import { Position } from './geographic.utils.position.class';
import { haversine } from 'haversine';
import fetch from 'node-fetch';

export class Toolkit {
  static async isPointInCircle(
    point: Position,
    center: Position,
    radiusMeters: number,
  ): Promise<boolean> {
    const start = {
      latitude: center.latitude,
      longitude: center.longitude,
    };

    const end = {
      latitude: point.latitude,
      longitude: point.longitude,
    };

    return haversine(start, end, { unit: 'meter' }) < radiusMeters;
  }

  static async getRegion(
    position: Position,
  ): Promise<{ country: string; city: string }> {
    const basicUrl: string =
      'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    const args: string = position.latitude + ',' + position.longitude;
    const key: string = '&key=AIzaSyCN9xLgJcFMIFJRhYV263VALxkuLJCBknI';

    const request: Response = await fetch(basicUrl + args + key);
    const response: any = await request.json();

    console.log(response);

    return { country: 'Poland', city: 'Warsaw' };
  }
}
