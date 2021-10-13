const Users = require('../models').Users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findOneUser = async (user) => {
  return await Users.findOne({ username: user });
};

const addUser = async (req, res) => {
  const { body } = req;
  const saltRounds = 10;
  try {
    const findOne = await findOneUser(body.username);

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

const loginUser = async (req, res) => {
  const { body } = req;
  try {
    const user = await findOneUser(body.username);
    if (!user) {
      res.status(400).json('invalid login');
      return;
    }
    const passwordCompare = await bcrypt.compare(body.password, user.password);
    if (!passwordCompare) {
      res.status(400).json('invalid password');
      return;
    }

    const tokenData = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(tokenData, process.env.SECRET);
    res.status(200).json({ token, username: user.username });
  } catch (error) {
    res.status(400).json({ error });
    return;
  }
};

module.exports = { addUser, loginUser };
