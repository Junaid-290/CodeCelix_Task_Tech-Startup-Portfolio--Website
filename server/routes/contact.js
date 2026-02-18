const express = require('express');
const router = express.Router();

// In-memory storage for demo (replace with MongoDB in production)
const contacts = [];

// POST - Submit contact form
router.post('/', (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create contact entry
    const newContact = {
      id: Date.now(),
      name,
      email,
      company: company || '',
      service: service || 'general',
      message,
      createdAt: new Date()
    };

    contacts.push(newContact);

    res.status(201).json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you soon.',
      data: newContact
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
});

// GET - Retrieve all contacts (for admin)
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: contacts
  });
});

module.exports = router;
