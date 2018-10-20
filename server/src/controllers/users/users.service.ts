import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { UserInterface } from './user.interface';
import { CreateUserDto } from './create/dto/create.user.dto';
import { USER_MODEL_PROVIDER } from '../../constants';

import { UserPosition } from './location/users.position.class';
import { Place } from '../places/place.class';
import { RideInterface } from 'controllers/rides/ride.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL_PROVIDER)
    private readonly userModel: Model<UserInterface>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserInterface> {
    const createdUser = new this.userModel(createUserDto);
    const alreadyExistingUser = await this.getUserByEmail(createUserDto.email);

    if (alreadyExistingUser !== null) {
      throw new Error('User with this email already exists');
    }

    return await createdUser.save();
  }
  async getUserByEmail(email: string): Promise<UserInterface> {
    return await this.userModel.findOne({ email });
  }

  async getUserBySession(session: string): Promise<UserInterface> {
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
    locations: Array<UserPosition>,
  ): Promise<void> {
    await this.userModel.findOneAndUpdate(
      { session: userSession },
      {
        $set: { positions: locations },
      },
    );
  }

  async updateUsersRides(
    userSession: string,
    rides: Array<RideInterface>,
  ): Promise<void> {
    await this.userModel.findOneAndUpdate(
      {
        session: userSession,
      },
      {
        $set: {
          rides: rides,
        },
      },
    );
  }
}
