import { Controller, Post, Headers, Body } from '@nestjs/common';
import { RidesService } from '../rides.service';
import { CreateRideDto } from './create.ride.dto';

import { UsersService } from '../../users/users.service';
import { UserInterface } from '../../users/user.interface';

@Controller('api/v1/rides/create')
export class CreateRidesController {
  constructor(
    private readonly rideService: RidesService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async createRide(
    @Headers() headers: any,
    @Body() createRideDto: CreateRideDto,
  ) {
    const exhibitorSession: string = headers.session;

    const exhibitor: UserInterface = await this.userService.getUserBySession(
      exhibitorSession,
    );

    if (exhibitor === null) {
      return { error: true, code: 201 };
    }

    const rideDate: Date = new Date(createRideDto.when);

    if (isNaN(rideDate.getTime()) === true) {
      return { error: true, code: 202 };
    }

    const rideId: number = await this.rideService.create(
      createRideDto,
      exhibitor,
      rideDate,
    );
    return { error: false, rideId: rideId };
  }
}
