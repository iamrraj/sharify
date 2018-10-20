import { Connection } from 'mongoose';

import { PlaceSchema } from './place.schema';
import { PLACE_MODEL_PROVIDER, DB_PROVIDER } from '../../constants';

export const placesProviders = [
  {
    provide: PLACE_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Place', PlaceSchema),
    inject: [DB_PROVIDER],
  },
];
