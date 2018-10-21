import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { RideInterface } from './ride.interface';
import { CreateRideDto } from './create/create.ride.dto';
import { RIDES_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class RidesService {
  constructor(
    @Inject(RIDES_MODEL_PROVIDER)
    private readonly rideModel: Model<RideInterface>,
  ) {}

  async create(
    createRideDto: CreateRideDto,
    exhibitorsMail: string,
    when: Date,
  ): Promise<RideInterface> {
    const addedRide = new this.rideModel(createRideDto);

    const lastRide: RideInterface[] = await this.rideModel
      .find({})
      .sort({ _id: -1 })
      .limit(1);

    if (lastRide.length === 0) {
      addedRide.ride_id = 0;
    } else {
      addedRide.ride_id = lastRide[0].ride_id + 1;
    }

    addedRide.addedOn = new Date().getTime();
    addedRide.exhibitorsMail = exhibitorsMail;
    addedRide.when = when;
    await addedRide.save();
    return addedRide;
  }

  async getAll(): Promise<RideInterface[]> {
    return await this.rideModel.find().exec();
  }

  async getRideById(_id: number) {
    return await this.rideModel.findOne({ ride_id: _id });
  }

  async removeById(_id: number) {
    await this.rideModel.findOneAndRemove({ ride_id: _id });
  }

  async updateRideById(_id: number, updatedRide: RideInterface): Promise<void> {
    await this.rideModel.findOneAndUpdate(
      { ride_id: _id },
      {
        $set: updatedRide,
      },
    );
  }

  async getRidesByCountryCityTimeAndSeats(
    country: string,
    city: string,
    when: Date,
    seats: number,
  ): Promise<RideInterface[]> {
    return await this.rideModel.find({
      country: country,
      city: city,
      when: { $gte: new Date(when) },
      $where: '4 - this.passengers.length >= ' + seats,
    });
  }
}
