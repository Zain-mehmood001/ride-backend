const db = require('../db/fakeDb');
const User = require('../models/User');

module.exports = {
  createUser: async (userData) => {
    const user = new User(userData);
    db.users.set(user.id, user);
    return user;
  },

  getUserById: async (id) => {
    return db.users.get(id) || null;
  },

  getUserByEmail: async (email) => {
    return Array.from(db.users.values()).find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
  },

  getAllUsers: async () => {
    return Array.from(db.users.values());
  },

  clearAllUsers: () => {
    db.users.clear();
  },
};
