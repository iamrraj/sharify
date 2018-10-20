import { Module } from '@nestjs/common';
import { AddUserLocationController } from './location.users.controller';
import { UsersService } from '../users.service';
import { usersProviders } from '../users.providers';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AddUserLocationController],
  providers: [UsersService, ...usersProviders],
})
export class AddUserLocationModule {}
