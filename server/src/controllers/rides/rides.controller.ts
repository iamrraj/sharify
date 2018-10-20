import { Controller, Post, Get, Body } from '@nestjs/common';
import { RidesService } from './rides.service';
import { RideDto } from './ride.dto';
import { RideInterface } from './ride.interface';
@Controller('api/v1/rides')
export class RidesController {
  constructor(private readonly rideService: RidesService) {}

  @Post() // TODO create a new ride object on flight not a DTO
  async addPlace(@Body() rideDto: RideDto) {
    await this.rideService.create(rideDto);
    return { error: false };
  }

  @Get()
  async getAllPlaces(): Promise<RideInterface[]> {
    return await this.rideService.getAll();
  }
}
