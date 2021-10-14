const router = require('express').Router();
const auth = require('../middleware/auth');

const { addPost, getAllPost } = require('../controllers').post;

router.get('/', auth, getAllPost);
router.get('/:id', auth, (req, res) => {});
router.put('/:id', auth, (req, res) => {});
router.post('/', auth, addPost);
router.delete('/:id', auth, (req, res) => {});

module.exports = router;
