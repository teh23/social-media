const { Post, User } = require('../models');

const addPost = async (req, res) => {
  const { body } = { ...req };

  try {
    if (!body.title.length > 0) {
      res.status(400).json({ error: 'invalid title' });
      return;
    }
    if (!body.body.length > 0) {
      res.status(400).json({ error: 'invalid post' });
      return;
    }
    if (!body.user.length > 0) {
      res.status(400).json({ error: 'invalid username' });
      return;
    }
    const newPost = new Post({
      ...body,
    });
    await newPost.save();
    res.status(200).json(newPost.toObject());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllPost = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
};

module.exports = { addPost, getAllPost };
