import { Module } from '@nestjs/common';
import { CreateUsersController } from './create.users.controller';
import { UsersService } from '../users.service';
import { usersProviders } from '../users.providers';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUsersController],
  providers: [UsersService, ...usersProviders],
})
export class CreateUsersModule {}
