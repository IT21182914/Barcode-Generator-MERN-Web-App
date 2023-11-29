// ticketRoutes.js

const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Existing route for generating tickets
router.post('/generate', ticketController.generateTicket);

// New route for fetching all tickets
router.get('/all', ticketController.getAllTickets);

module.exports = router;
