import * as mongoose from 'mongoose';

export const RideSchema = new mongoose.Schema({
  ride_id: {
    type: Number,
    required: true,
  },
  addedOn: {
    type: Number,
    required: true,
  },
  origin: {
    type: Object,
    required: true,
  },
  destination: {
    type: Object,
    required: true,
  },
  exhibitorsMail: {
    type: String,
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
  when: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    required: true,
    default: 'Poland',
  },
  city: {
    type: String,
    required: true,
    default: 'Warsaw',
  },
});
