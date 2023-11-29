// ticket.js

const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  barcode: {
    type: String,
    required: true,
  },
  date: {
    type: Date, // Use Date type for the date field
    required: true,
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
