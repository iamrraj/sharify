import { Place } from '../places/place.class';

export class RideDto {
  readonly from: Place;

  readonly to: Place;

  readonly exhibitor: string;
  readonly cost: number;
  readonly currency: string;
}
