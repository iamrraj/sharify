import { Module } from '@nestjs/common';
import { CreateRidesController } from './create.ride.controller';
import { RidesService } from '../rides.service';

import { ridesProviders } from '../rides.providers';
import { DatabaseModule } from '../../../database/database.module';

import { usersProviders } from '../../users/users.providers';
import { UsersService } from '../../users/users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateRidesController],
  providers: [RidesService, ...ridesProviders, UsersService, ...usersProviders],
})
export class CreateRidesModule {}
