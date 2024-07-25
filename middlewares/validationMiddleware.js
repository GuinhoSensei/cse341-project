const { check, validationResult } = require('express-validator');

exports.validateUser = [
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

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

exports.validateTask = [
  check('title', 'Title is required').not().isEmpty(),
  check('description', 'Description must be a string').optional().isString(),
  check('status', 'Status must be a string').optional().isString(),
  check('dueDate', 'Due Date must be a valid date').optional().isDate(),
  check('assignedTo', 'Assigned To must be a valid user ID').optional().isMongoId(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateComment = [
  check('taskId', 'Task ID is required').not().isEmpty(),
  check('comment', 'Comment is required').not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
