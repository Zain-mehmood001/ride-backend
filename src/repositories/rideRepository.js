const db = require('../database/SimulatedDB');
const Ride = require('../models/Ride');
const { RideStatus } = require('../common/enums');

module.exports = {
  createRide: async (rideData) => {
    const ride = new Ride(rideData);
    db.rides.set(ride.id, ride);
    return ride;
  },

  getRideById: async (id) => {
    return db.rides.get(id) || null;
  },

  getRidesByPassengerId: async (passengerId) => {
    return Array.from(db.rides.values()).filter(
      (ride) => ride.passenger_id === passengerId
    );
  },

  getRidesByDriverId: async (driverId) => {
    return Array.from(db.rides.values()).filter(
      (ride) => ride.driver_id === driverId
    );
  },

  updateRideStatus: async (rideId, newStatus) => {
    const ride = db.rides.get(rideId);
    if (!ride) return null;
    ride.ride_status = newStatus;
    return ride;
  },

  assignDriverToRide: async (rideId, driverId) => {
    const ride = db.rides.get(rideId);
    if (!ride || ride.ride_status !== RideStatus.REQUESTED) return null;
    ride.driver_id = driverId;
    ride.ride_status = RideStatus.ACCEPTED;
    return ride;
  },

  getAllRides: async () => {
    return Array.from(db.rides.values());
  },

  clearAllRides: () => {
    db.rides.clear();
  },
};
