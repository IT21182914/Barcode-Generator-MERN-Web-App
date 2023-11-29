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
    type: String, // You might want to use Date type depending on your requirements
    required: true,
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
