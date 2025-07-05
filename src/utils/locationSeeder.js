const Location = require('../models/Location');
const locationRepo = require('../repositories/locationRepository');

async function seedLocations() {
  const locationNames = [
    "Mall Road",
    "Airport",
    "Liberty Market",
    "Barkat Market",
    "Johat Town",
    "Thokar",
    "Old City",
    "Lakeview",
    "Model Town",
    "DHA",
    "EME",    
  ];

  for (const name of locationNames) {
    const location = new Location(name);
    await locationRepo.addLocation(location);
  }

  console.log("Locations seeded:", locationNames.length);
}

module.exports = seedLocations;
