import { Controller, Delete, Param, Body, Headers } from '@nestjs/common';

import { RidesService } from '../rides.service';

import { DeleteRideDto } from './delete.ride.dto';

import { UserInterface } from '../../users/user.interface';
import { UsersService } from '../../users/users.service';
import { Ride } from '../ride.class';
import { RideInterface } from '../ride.interface';

@Controller('api/v1/rides/delete')
export class DeleteRidesController {
  constructor(
    private readonly rideService: RidesService,
    private readonly userService: UsersService,
  ) {}

  @Delete()
  async deleteRidesController(
    @Body() deleteRidesDto: DeleteRideDto,
    @Headers() headers: any,
  ) {
    const ids: number[] = deleteRidesDto.ids;
    const session: string = headers.session;

    const user: UserInterface = await this.userService.getUserBySession(
      session,
    );

    if (user === null) {
      return { error: true, code: 211 };
    }

    const userRides: Array<RideInterface> = user.rides;

    const userRidesId: number[] = userRides.map(ride => ride.ride_id);

    for (let i: number; i < ids.length; i++) {
      if (!(userRidesId.indexOf(ids[i]) > -1)) {
        return { error: true, code: 212 };
      }
    }

    for (let i: number; i < ids.length; i++) {
      await this.rideService.removeById(ids[i]);
    }

    return { error: false };
  }
}
