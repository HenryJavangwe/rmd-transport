import { create } from "zustand";
import { Trip } from "../models/trip";

interface TripStore {
  trips: Trip[];
  addTrip: (trip: Trip) => void;
  removeTrip: (trip: Trip) => void;
}

export const useTripStore = create<TripStore>((set) => ({
  trips: [],
  addTrip: (trip: Trip) =>
    set((state: { trips: Trip[] }) => ({ trips: [...state.trips, trip] })),
  removeTrip: (trip: Trip) =>
    set((state: { trips: Trip[] }) => ({
      trips: state.trips.filter((t) => t.id !== trip.id),
    })),
}));
