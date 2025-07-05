const db = require('../database/SimulatedDB');
const Location = require('../models/Location');

module.exports = {
  addLocation: async (locationName) => {
    const location = new Location(locationName);
    db.locations.set(location.id, location);
    return location;
  },

  getLocationById: async (id) => {
    return db.locations.get(id) || null;
  },

  getAllLocations: async () => {
    return Array.from(db.locations.values());
  },

  findLocationByName: async (name) => {
    return Array.from(db.locations.values()).find(
      (loc) => loc.locationName.toLowerCase() === name.toLowerCase()
    );
  },

  clearAllLocations: () => {
    db.locations.clear();
  },
};
