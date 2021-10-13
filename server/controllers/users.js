const Users = require('../models').Users;
const bcrypt = require('bcrypt');

const addUser = async (req, res) => {
  const { body } = req;
  const saltRounds = 10;
  try {
    const findOne = await Users.findOne({ username: body.username });

    if (!findOne) {
      try {
        const passwordHash = await bcrypt.hash(body.password, saltRounds);

        let newUser = new Users({
          username: body.username,
          password: passwordHash,
        });
        try {
          const saved = await newUser.save();

          res.send(saved);
        } catch (err) {
          res.status(400).json(err.message);
        }
      } catch (err) {
        res.status(404).json(err.message);
      }
    } else {
      res.status(400).json('User already in database');
    }
  } catch (err) {
    res.status(404).json(err.message);
  }
};

module.exports = { addUser };
