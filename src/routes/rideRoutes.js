const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

router.post('/request', rideController.requestRide);
router.get('/status/:rideId', rideController.getRideStatus);
router.get('/history/passenger/:passengerId', rideController.rideHistoryPassenger);
router.get('/history/driver/:driverId', rideController.rideHistoryDriver);
router.post('/accept', rideController.acceptRide);
router.post('/status/update', rideController.updateStatus);

module.exports = router;
