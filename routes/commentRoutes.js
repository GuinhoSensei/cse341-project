const express = require('express');
const { createComment, getComments, getComment, updateComment, deleteComment } = require('../controllers/commentController');
const ensureAuth = require('../middlewares/authMiddleware');
const { validateComment } = require('../middlewares/validationMiddleware');
const router = express.Router();

router.post('/', ensureAuth, validateComment, createComment);
router.get('/', getComments);
router.get('/:id', getComment);
router.put('/:id', ensureAuth, validateComment, updateComment);
router.delete('/:id', ensureAuth, deleteComment);

module.exports = router;
