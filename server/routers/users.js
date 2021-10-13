const router = require('express').Router();

const addUser = require('../controllers').users.addUser;

router.get('/', (req, res) => {
  res.sendStatus(200);
});
router.post('/', addUser);

module.exports = router;
