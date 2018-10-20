import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { User } from './user.interface';
import { CreateUserDto } from './create/dto/create.user.dto';
import { USER_MODEL_PROVIDER } from '../../constants';

import { Position } from './location/position.class';
import { Place } from '../places/place.class';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    const alreadyExistingUser = await this.getUserByEmail(createUserDto.email);

    if (alreadyExistingUser !== null) {
      throw new Error('User with this email already exists');
    }

    return await createdUser.save();
  }
  async getUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async getUserBySession(session: string): Promise<User> {
    return await this.userModel.findOne({ session });
  }

  async updateUsersSession(email: string, newSession: string): Promise<void> {
    await this.userModel.findOneAndUpdate(
      { email },
      {
        $set: { session: newSession },
      },
    );
  }

  async updateUsersPositions(
    userSession: string,
    locations: Array<Position>,
  ): Promise<void> {
    await this.userModel.findOneAndUpdate(
      { session: userSession },
      {
        $set: { positions: locations },
      },
    );
  }

  async updateUsersMissedPlaces(
    userSession: string,
    places: Array<Place>,
  ): Promise<void> {
    await this.userModel.findOneAndUpdate(
      {
        session: this.userModel,
      },
      {
        $set: { missedPlaces: places },
      },
    );
  }
}
