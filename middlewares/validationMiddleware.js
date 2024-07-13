const { check, validationResult } = require('express-validator');

exports.validateProject = [
  check('title', 'Title is required').not().isEmpty(),
  check('description', 'Description must be a string').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateComment = [
  check('projectId', 'Project ID is required').not().isEmpty(),
  check('text', 'Text is required').not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
