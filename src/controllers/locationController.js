const locationService = require('../services/locationService');

module.exports = {
  getAllLocations: async (req, res) => {
    const locations = await locationService.getAllLocations();
    res.json(locations);
  }
};
