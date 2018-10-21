import { Controller, Post, Body, Headers } from '@nestjs/common';
import { UsersService } from 'controllers/users/users.service';
import { RidesService } from '../rides.service';
import { JoinRideDto } from './join.ride.dto';
import { UserInterface } from 'controllers/users/user.interface';
import { RideInterface } from '../ride.interface';

@Controller('api/v1/rides/join')
export class JoinRideController {
  constructor(
    private readonly userService: UsersService,
    private readonly rideService: RidesService,
  ) {}

  @Post()
  async joinRide(@Headers() headers: any, @Body() joinRideDto: JoinRideDto) {
    const userSession: string = headers.session;

    const user: UserInterface = await this.userService.getUserBySession(
      userSession,
    );

    if (user === null) {
      return { error: true, code: 251 };
    }

    let ride: RideInterface = await this.rideService.getRideById(
      joinRideDto.rideId,
    );

    if (ride === null) {
      return { error: true, code: 252 };
    }

    ride.passengers.push(user);

    for (let i: number = 0; i < joinRideDto.seats - 1; i++) {
      ride.passengers.push(null); // Adding anonymous passanger
    }

    await this.rideService.updateRideById(joinRideDto.rideId, ride);

    const rideCost = (ride.cost / 4) * joinRideDto.seats;

    return { error: false, rideCost: rideCost };
  }
}
