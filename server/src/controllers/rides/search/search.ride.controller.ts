import { Controller, Body, Post, Headers } from '@nestjs/common';

import { RidesService } from '../rides.service';
import { UsersService } from '../../users/users.service';
import { SearchRideDto } from './search.ride.dto';
import { UserInterface } from 'controllers/users/user.interface';
import { RideInterface } from '../ride.interface';

import { Toolkit as GeographicToolkit } from '../../../utils/geographic.utils.toolkit';
import { Position } from '../../../utils/geographic.utils.position.class';

import moment = require('moment');

@Controller('api/v1/rides/search')
export class SearchRidesController {
  constructor(
    private readonly rideService: RidesService,
    private readonly userService: UsersService,
  ) {}
  @Post()
  async searchRide(
    @Headers() headers: any,
    @Body() searchRideDto: SearchRideDto,
  ) {
    const userSession: string = headers.session;
    const user: UserInterface = await this.userService.getUserBySession(
      userSession,
    );

    if (user === null) {
      return { error: true, code: 241 };
    }

    let rideDate: Date = new Date(searchRideDto.when);

    if (isNaN(rideDate.getTime()) === true) {
      return { error: true, code: 242 };
    }

    rideDate = moment(rideDate)
      .subtract(30, 'minutes')
      .toDate();

    const selectedRides: RideInterface[] = await this.rideService.getRidesByCountryCityTimeAndSeats(
      searchRideDto.country,
      searchRideDto.city,
      rideDate,
      searchRideDto.seats,
    );

    if (selectedRides.length === 0) {
      return { error: true, code: 243 };
    }
    let matchingRides: RideInterface[] = [];

    for (let i: number = 0; i < selectedRides.length; i++) {
      if (
        GeographicToolkit.isPointInCircle(
          new Position(
            searchRideDto.origin.latitude,
            searchRideDto.origin.longitude,
          ),
          new Position(
            selectedRides[i].origin.latitude,
            selectedRides[i].origin.longitude,
          ),
          searchRideDto.tolerationRadiusMeters,
        ) &&
        GeographicToolkit.isPointInCircle(
          new Position(
            searchRideDto.destination.latitude,
            searchRideDto.destination.longitude,
          ),
          new Position(
            selectedRides[i].destination.latitude,
            selectedRides[i].destination.longitude,
          ),
          searchRideDto.tolerationRadiusMeters,
        )
      ) {
        matchingRides.push(selectedRides[i]);
      }
    }

    if (matchingRides.length === 0) {
      return { error: true, code: 244 };
    }

    return { error: false, result: matchingRides };
  }
}
