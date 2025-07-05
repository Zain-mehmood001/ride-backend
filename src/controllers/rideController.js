const rideService = require('../services/rideService');

module.exports = {
  requestRide: async (req, res) => {
    try {
      const ride = await rideService.requestRide(req.body);
      res.status(201).json(ride);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getRideStatus: async (req, res) => {
    try {
      const status = await rideService.getRideStatus(req.params.rideId);
      res.json({ status });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  rideHistoryPassenger: async (req, res) => {
    const rides = await rideService.getRideHistoryByPassenger(req.params.passengerId);
    res.json(rides);
  },

  rideHistoryDriver: async (req, res) => {
    const rides = await rideService.getRideHistoryByDriver(req.params.driverId);
    res.json(rides);
  },

  acceptRide: async (req, res) => {
    try {
      const ride = await rideService.acceptRide(req.body.rideId, req.body.driverId);
      res.json(ride);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  updateStatus: async (req, res) => {
    try {
      const ride = await rideService.updateRideStatus(req.body.rideId, req.body.status);
      res.json(ride);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
