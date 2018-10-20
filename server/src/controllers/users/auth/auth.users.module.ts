import { Module } from '@nestjs/common';
import { AuthenticateUsersController } from './auth.users.controller';
import { UsersService } from '../users.service';
import { usersProviders } from '../users.providers';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthenticateUsersController],
  providers: [UsersService, ...usersProviders],
})
export class AuthenticateUsersModule {}
