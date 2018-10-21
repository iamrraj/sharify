import { Module } from '@nestjs/common';
import { SearchRidesController } from './search.ride.controller';
import { RidesService } from '../rides.service';

import { ridesProviders } from '../rides.providers';
import { DatabaseModule } from '../../../database/database.module';

import { usersProviders } from '../../users/users.providers';
import { UsersService } from '../../users/users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SearchRidesController],
  providers: [RidesService, ...ridesProviders, UsersService, ...usersProviders],
})
export class SearchRidesModule {}
