const { v4: uuidv4 } = require('uuid');

class Location {
  constructor(locationName) {
    this.id = uuidv4();
    this.locationName = locationName;
  }
}

module.exports = Location;
