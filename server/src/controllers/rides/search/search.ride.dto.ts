import { Place } from '../../places/place.class';

export class SearchRideDto {
  readonly origin: Place;
  readonly destination: Place;
  readonly tolerationRadiusMeters: number;

  readonly when: string;
  readonly timeToleranceMinutes: number;

  readonly seats: number;

  readonly country: string;
  readonly city: string;
}
