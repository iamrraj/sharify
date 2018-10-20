import { Module } from '@nestjs/common';
import { IdentifyUserController } from './identify.users.controller';
import { UsersService } from '../users.service';
import { usersProviders } from '../users.providers';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [IdentifyUserController],
  providers: [UsersService, ...usersProviders],
})
export class IdentifyUsersModule {}
