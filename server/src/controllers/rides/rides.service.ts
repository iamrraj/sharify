import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { RideInterface } from './ride.interface';
import { RideDto } from './ride.dto';
import { RIDES_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class RidesService {
  constructor(
    @Inject(RIDES_MODEL_PROVIDER)
    private readonly rideModel: Model<RideInterface>,
  ) {}

  async create(createPlaceDto: RideDto): Promise<RideInterface> {
    const addedRide = new this.rideModel(createPlaceDto);
    // TODO check if place like this already exists
    return await addedRide.save();
  }

  async getAll(): Promise<RideInterface[]> {
    return await this.rideModel.find().exec();
  }
}
