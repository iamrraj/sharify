import { Document } from 'mongoose';
import { Position } from './location/position.class';
import { Ride } from '../rides/ride.class';

export interface User extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly session: string;
  readonly positions: Array<Position>;
  readonly rides: Array<Ride>;
}
