const { v4: uuidv4 } = require('uuid');
const { RideStatus, RideType } = require('../common/enums');

class Ride {
  constructor({
    passenger_id,
    driver_id = null,
    pickup_id,
    dropoff_id,
    ride_type = null,
  }) {
    this.id = uuidv4();
    this.passenger_id = passenger_id;
    this.driver_id = driver_id;
    this.pickup_id = pickup_id;
    this.dropoff_id = dropoff_id;
    this.ride_type = ride_type;
    this.ride_status = RideStatus.REQUESTED;
    this.estimated_distance = this.generateEstimatedDistance();
    this.date_time = new Date();
  }

  generateEstimatedDistance() {
    // Simulate estimated distance between locations in km
    return parseFloat((Math.random() * (15 - 2) + 2).toFixed(2)); // 2km to 15km
  }
}

module.exports = Ride;