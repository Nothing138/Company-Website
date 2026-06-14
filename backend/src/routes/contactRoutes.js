// src/routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const { submitContactForm, getContactStatus } = require('../controllers/contactController');

/**
 * @route   POST /api/contact
 * @desc    Submit contact form
 * @access  Public
 */
router.post('/', submitContactForm);

/**
 * @route   GET /api/contact/status
 * @desc    Get contact form status
 * @access  Public
 */
router.get('/status', getContactStatus);

module.exports = router;