const UserType = Object.freeze({
  PASSENGER: 'Passenger',
  DRIVER: 'Driver',
});

const RideType = Object.freeze({
  BIKE: 'Bike',
  CAR: 'Car',
  RICKSHAW: 'Rickshaw',
});

const RideStatus = Object.freeze({
  REQUESTED: 'Requested',
  ACCEPTED: 'Accepted',
  REJECTED: 'Rejected',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
});

module.exports = {
  UserType,
  RideType,
  RideStatus,
};
