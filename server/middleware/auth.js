const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authorization = req.get('authorization');

  if (!authorization) {
    res.status(401).send({ error: 'token missing' });
  } else {
    const token = authorization.substring(7);
    try {
      const decode = jwt.decode(token, process.env.SECRET);
      decode.id;
      next();
    } catch (err) {
      res.status(401).json({ error: 'token invalid' });
    }
  }
};

module.exports = auth;
