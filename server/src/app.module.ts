import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CreateUsersModule } from './controllers/users/create/create.users.module';
import { AuthenticateUsersModule } from './controllers/users/auth/auth.users.module';
import { AddUserLocationModule } from './controllers/users/location/location.users.module';
import { IdentifyUsersModule } from './controllers/users/identify/identify.users.module';

import { PlacesModule } from './controllers/places/places.module';
import { CreateRidesModule } from './controllers/rides/create/create.ride.module';
import { DeleteRidesModule } from './controllers/rides/delete/delete.ride.module';

@Module({
  imports: [
    CreateUsersModule,
    AuthenticateUsersModule,
    AddUserLocationModule,
    PlacesModule,
    IdentifyUsersModule,
    CreateRidesModule,
    DeleteRidesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
