const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.post('/generate', ticketController.generateTicket);

module.exports = router;
