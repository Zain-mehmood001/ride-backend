const express = require('express');
const app = express();
const PORT = 3000;

const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');
const locationRoutes = require('./routes/locationRoutes');

const seedLocations = require('./seeders/locationSeeder'); // optional

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/locations', locationRoutes);

seedLocations(); // Seed sample locations

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
