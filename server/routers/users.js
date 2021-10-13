const router = require('express').Router();

const addUser = require('../controllers').users.addUser;
const loginUser = require('../controllers').users.loginUser;
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res, next) => {
  res.send('welcome logged master');
});
router.post('/', addUser);
router.post('/login', loginUser);
module.exports = router;
