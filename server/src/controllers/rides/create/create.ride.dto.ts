import { Place } from '../../places/place.class';

export class CreateRideDto {
  readonly origin: Place;

  readonly destination: Place;

  readonly cost: number;
  readonly currency: string;

  readonly when: string;
}
