import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlaceService } from './places.service';
import { placesProviders } from './places.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PlacesController],
  providers: [PlaceService, ...placesProviders],
})
export class PlacesModule {}
