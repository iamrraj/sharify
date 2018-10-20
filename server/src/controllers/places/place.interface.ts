import { Document } from 'mongoose';

export interface PlaceInterface extends Document {
  readonly name: string;
  readonly latitude: number;
  readonly longitude: number;
}
