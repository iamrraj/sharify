import { Controller, Post, Get, Body } from '@nestjs/common';
import { PlaceDto } from './place.dto';
import { PlaceService } from './places.service';
import { PlaceInterface } from './place.interface';

@Controller('api/v1/places')
export class PlacesController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  async addPlace(@Body() placeDto: PlaceDto) {
    await this.placeService.create(placeDto);
    return { error: false };
  }

  @Get()
  async getAllPlaces(): Promise<PlaceInterface[]> {
    return await this.placeService.getAll();
  }
}
