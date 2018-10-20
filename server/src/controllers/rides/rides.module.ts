import { Module } from '@nestjs/common';
import { RidesController } from './rides.controller';
import { RidesService } from './rides.service';
import { ridesProviders } from './rides.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RidesController],
  providers: [RidesService, ...ridesProviders],
})
export class RidesModule {}
