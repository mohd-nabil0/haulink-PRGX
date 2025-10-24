import * as ExpoLocation from 'expo-location';
import { EventEmitter } from 'expo-modules-core';

type LocationEvents = {
  locationUpdate: (location: ExpoLocation.LocationObject) => void;
};

export const LocationEmitter = new EventEmitter<LocationEvents>();
