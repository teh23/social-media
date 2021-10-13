const router = require('express').Router();

const addUser = require('../controllers').users.addUser;
const loginUser = require('../controllers').users.loginUser;
router.get('/', (req, res) => {
  res.sendStatus(200);
});
router.post('/', addUser);
router.post('/login', loginUser);
module.exports = router;
