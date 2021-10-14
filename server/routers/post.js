const router = require('express').Router();
const auth = require('../middleware/auth');

const { addPost, getAllPost } = require('../controllers').post;

router.get('/', auth, getAllPost);
//todo
router.get('/:id', auth, (req, res) => {});
//todo
router.put('/:id', auth, (req, res) => {});
router.post('/', auth, addPost);
//todo
router.delete('/:id', auth, (req, res) => {});

module.exports = router;
