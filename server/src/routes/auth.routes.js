const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { 
  register, 
  login, 
  getProfile, 
  updateProfile 
} = require('../controllers/auth.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

// Validation rules
const registerValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('name').notEmpty().trim()
];

const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').exists()
];

// Public routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

// Protected routes
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);

module.exports = router;