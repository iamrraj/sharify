import { Module } from '@nestjs/common';
import { SearchRidesController } from './search.ride.controller';
import { RidesService } from '../rides.service';
import { ridesProviders } from '../rides.providers';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SearchRidesController],
  providers: [RidesService, ...ridesProviders],
})
export class SearchRidesModule {}
