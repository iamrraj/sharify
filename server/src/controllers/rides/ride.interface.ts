import { Document } from 'mongoose';
import { Place } from '../places/place.class';
import { User } from '../users/user.class';

export interface RideInterface extends Document {
  readonly ride_id: number;
  readonly origin: Place;
  readonly destination: Place;
  readonly exhibitorsMail: string;
  readonly passengers: Array<string>;
  readonly duration: number;
  readonly cost: number;
  readonly currency: string;
  readonly addedOn: number;
  readonly when: Date;
  readonly country: string;
  readonly city: string;
}
