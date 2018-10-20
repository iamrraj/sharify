import { Connection } from 'mongoose';

import { RideSchema } from './ride.schema';
import { RIDES_MODEL_PROVIDER, DB_PROVIDER } from '../../constants';

export const ridesProviders = [
  {
    provide: RIDES_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Ride', RideSchema),
    inject: [DB_PROVIDER],
  },
];
