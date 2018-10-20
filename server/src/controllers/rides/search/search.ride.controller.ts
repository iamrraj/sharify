import { Controller, Body, Post } from '@nestjs/common';

import { RidesService } from '../rides.service';
import { SearchRideDto } from './search.ride.dto';

@Controller('api/v1/rides/search')
export class SearchRidesController {
  constructor(private readonly rideService: RidesService) {}
  @Post()
  async searchRide(@Body() searchRideDto: SearchRideDto) {}
}
