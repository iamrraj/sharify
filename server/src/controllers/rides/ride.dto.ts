import { Place } from '../places/place.class';

export class RideDto {
  readonly from: Place;

  readonly to: Place;

  readonly exhibitorSession: string;
  readonly cost: number;
  readonly currency: string;
}
