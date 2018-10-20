import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CreateUsersModule } from './controllers/users/create/create.users.module';
import { AuthenticateUsersModule } from './controllers/users/auth/auth.users.module';
import { AddUserLocationModule } from './controllers/users/location/location.users.module';
import { IdentifyUsersModule } from './controllers/users/identify/identify.users.module';

import { PlacesModule } from './controllers/places/places.module';
import { RidesModule } from './controllers/rides/rides.module';

@Module({
  imports: [
    CreateUsersModule,
    AuthenticateUsersModule,
    AddUserLocationModule,
    PlacesModule,
    IdentifyUsersModule,
    RidesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
