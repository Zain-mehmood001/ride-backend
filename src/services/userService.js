const bcrypt = require('bcrypt');
const userRepo = require('../repositories/userRepository');
const { UserType } = require('../common/enums');
const createHttpError = require('http-errors');

module.exports = {
  register: async (userData) => {
    const existing = await userRepo.getUserByEmail(userData.email);
    if (existing) throw createError(401, 'Email already registered.');

    const password_hash = await bcrypt.hash(userData.password, 10);
    const user = await userRepo.createUser({ ...userData, password_hash });
    return { id: user.id, email: user.email, first_name: user.first_name, last_name: user.last_name};
  },

  login: async (email, password) => {
    const user = await userRepo.getUserByEmail(email);
    if (!user) throw createError(401, "Invalid Credentials");

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) throw createError(401, "Invalid Credentials");

    return user;
  },

  getAvailableDrivers: async () => {
    const all = await userRepo.getAllUsers();
    return all.filter(u => u.user_type === UserType.DRIVER && u.available_to_drive);
  },
};
