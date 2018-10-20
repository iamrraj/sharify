import { Place } from '../../places/place.class';

export class CreateRideDto {
  readonly from: Place;

  readonly to: Place;

  readonly cost: number;
  readonly currency: string;

  readonly when: string;
}
