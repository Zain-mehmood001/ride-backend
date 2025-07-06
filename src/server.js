const express = require('express');

const cors = require('cors');
const app = express();
const PORT = 3000;
const API_VERSION = "v1"

const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');
const locationRoutes = require('./routes/locationRoutes');

const seedLocations = require('./utils/locationSeeder'); // optional

app.use(cors());
app.use(express.json());

app.use(`/api/${API_VERSION}/auth`, authRoutes);
app.use(`/api/${API_VERSION}/rides`, rideRoutes);
app.use(`/api/${API_VERSION}/locations`, locationRoutes);

seedLocations(); // Seed sample locations

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
