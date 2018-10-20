import { Place } from '../places/place.class';
import { User } from '../users/user.class';

export class Ride {
  ride_id: Number;
  timestamp: Number;
  from: Place;
  to: Place;
  exhibitor: User;
  passengers: Array<User>;
  distance: Number;
  duration: Number;
  cost: Number;
  currency: string;
}
