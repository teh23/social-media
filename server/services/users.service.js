const { User } = require('../models');

const findOneUser = async (user) => {
  return await User.findOne({ username: user });
};

module.exports = { findOneUser };
