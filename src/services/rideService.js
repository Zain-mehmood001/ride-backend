const rideRepo = require('../repositories/rideRepository');
const locationService = require('./locationService');
const { RideStatus } = require('../common/enums');

module.exports = {
  requestRide: async ({ passenger_id, pickup_name, dropoff_name, ride_type }) => {
    const pickup = await locationService.getOrCreateLocationByName(pickup_name);
    const dropoff = await locationService.getOrCreateLocationByName(dropoff_name);

    return await rideRepo.createRide({
      passenger_id,
      pickup_id: pickup.id,
      dropoff_id: dropoff.id,
      ride_type,
    });
  },

  getRideStatus: async (rideId) => {
    const ride = await rideRepo.getRideById(rideId);
    if (!ride) throw new Error('Ride not found.');
    return ride.ride_status;
  },

  getRideHistoryByPassenger: async (passengerId) => {
    return await rideRepo.getRidesByPassengerId(passengerId);
  },

  getRideHistoryByDriver: async (driverId) => {
    return await rideRepo.getRidesByDriverId(driverId);
  },

  acceptRide: async (rideId, driverId) => {
    const updated = await rideRepo.assignDriverToRide(rideId, driverId);
    if (!updated) throw new Error('Ride already accepted or not found.');
    return updated;
  },

  updateRideStatus: async (rideId, status) => {
    const ride = await rideRepo.updateRideStatus(rideId, status);
    if (!ride) throw new Error('Ride not found.');
    return ride;
  }
};
