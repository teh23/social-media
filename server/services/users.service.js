const Users = require('../models/users');

const findOneUser = async (user) => {
  return await Users.findOne({ username: user });
};

module.exports = { findOneUser };
