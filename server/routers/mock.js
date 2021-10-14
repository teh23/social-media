const { DB_URL } = process.env;
const Post = require('../models').Post;
const User = require('../models').User;
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const initialPost = {
  title: 'test title',
  body: 'test body',
  //   media: '',
  //   user: '',
  //   comments: [''],
};

const initialUser = {
  username: 'test',
  password: 'test',
};

const setData = async () => {
  await mongoose.connect(DB_URL);
  await User.deleteMany({});
  let userObject = new User({
    username: initialUser.username,
    password: await bcrypt.hash(initialUser.password, 10),
  });
  await userObject.save();
  await Post.deleteMany({});
  let postObject = new Post({
    ...initialPost,
    user: userObject._id,
  });
  await postObject.save();
};

const closeMongoose = () => {
  mongoose.connection.close();
};

module.exports = { setData, initialUser, closeMongoose };
