import { Document } from 'mongoose';
import { UserPosition } from './location/users.position.class';
import { RideInterface } from 'controllers/rides/ride.interface';

export interface UserInterface extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly session: string;
  readonly positions: Array<UserPosition>;
  readonly rides: Array<RideInterface>;
}
