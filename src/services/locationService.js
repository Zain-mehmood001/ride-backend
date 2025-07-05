const locationRepo = require('../repositories/locationRepository');

module.exports = {
  getOrCreateLocationByName: async (name) => {
    let loc = await locationRepo.findLocationByName(name);
    if (!loc) {
      loc = await locationRepo.addLocation(name);
    }
    return loc;
  },

  getAllLocations: async () => {
    return locationRepo.getAllLocations();
  }
};
