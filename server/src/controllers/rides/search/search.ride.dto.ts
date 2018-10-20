import { Place } from '../../places/place.class';

export class SearchRideDto {
  readonly origin: Place;
  readonly destination: Place;
  readonly tolerationRadiusMeters: number;

  readonly when: Date;
  readonly timeToleranceMinutes: number;

  readonly places: number;
}
