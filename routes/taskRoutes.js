const express = require('express');
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');
const ensureAuth = require('../middlewares/authMiddleware');
const { validateTask } = require('../middlewares/validationMiddleware');
const router = express.Router();

router.post('/', ensureAuth, validateTask, createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id', ensureAuth, validateTask, updateTask);
router.delete('/:id', ensureAuth, deleteTask);

module.exports = router;
