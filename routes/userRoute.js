const express = require('express');
const { getUser, updateUser } = require('../controllers/userController');
const ensureAuth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:id', ensureAuth, getUser);
router.put('/:id', ensureAuth, updateUser);

module.exports = router;
