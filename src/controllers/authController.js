const userService = require('../services/userService');

module.exports = {
  register: async (req, res) => {
    try {
      const user = await userService.register(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const user = await userService.login(req.body.email, req.body.password);
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
