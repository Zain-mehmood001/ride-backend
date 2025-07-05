const bcrypt = require('bcrypt');
const userRepo = require('../repositories/userRepository');

module.exports = {
  register: async (userData) => {
    const existing = await userRepo.getUserByEmail(userData.email);
    if (existing) throw new Error('Email already registered.');

    const password_hash = await bcrypt.hash(userData.password, 10);
    const user = await userRepo.createUser({ ...userData, password_hash });
    return user;
  },

  login: async (email, password) => {
    const user = await userRepo.getUserByEmail(email);
    if (!user) throw new Error('User not found.');

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) throw new Error('Invalid password.');

    return user;
  },

  getAvailableDrivers: async () => {
    const all = await userRepo.getAllUsers();
    return all.filter(u => u.user_type === 'driver' && u.available_to_drive);
  },
};
