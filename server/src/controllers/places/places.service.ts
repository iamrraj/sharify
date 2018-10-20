import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { PlaceInterface } from './place.interface';
import { PlaceDto } from './place.dto';
import { PLACE_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class PlaceService {
  constructor(
    @Inject(PLACE_MODEL_PROVIDER)
    private readonly placeModel: Model<PlaceInterface>,
  ) {}

  async create(createPlaceDto: PlaceDto): Promise<PlaceInterface> {
    const createdPlace = new this.placeModel(createPlaceDto);
    // TODO check if place like this already exists
    return await createdPlace.save();
  }

  async getPlaceByName(name: string): Promise<PlaceInterface> {
    return await this.placeModel.findOne({
      name: name,
    });
  }

  async getAll(): Promise<PlaceInterface[]> {
    return await this.placeModel.find().exec();
  }

  async deleteByName(name: string): Promise<void> {
    await this.placeModel.findOneAndRemove({ name });
  }
}
