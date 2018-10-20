import * as mongoose from 'mongoose';

export const RideSchema = new mongoose.Schema({
  ride_id: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  from: {
    type: Object,
    required: true,
  },
  to: {
    type: Object,
    required: true,
  },
  exhibitor: {
    type: Object,
    required: true,
  },
  passengers: {
    type: Array,
    required: true,
  },
  distance: {
    type: Number,
    required: false,
  },
  duration: {
    type: Number,
    required: false,
  },
  cost: {
    type: Number,
    required: false,
  },
  currency: {
    type: String,
    required: true,
  },
});
