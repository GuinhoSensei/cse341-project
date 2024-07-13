const express = require('express');
const { createProject, getProjects, getProject, updateProject, deleteProject } = require('../controllers/projectController');
const ensureAuth = require('../middlewares/authMiddleware');
const { validateProject } = require('../middlewares/validationMiddleware');
const router = express.Router();

router.post('/', ensureAuth, validateProject, createProject);
router.get('/', getProjects);
router.get('/:id', getProject);
router.put('/:id', ensureAuth, validateProject, updateProject);
router.delete('/:id', ensureAuth, deleteProject);

module.exports = router;
