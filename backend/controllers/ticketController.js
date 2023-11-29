// ticketController.js

const Ticket = require('../models/ticket');

const generateTicket = async (req, res) => {
  try {
    const { quantity, value } = req.body;

    // Generate unique barcode based on the current count
    const barcode = `BRHUGUGUG${await Ticket.countDocuments() + 1}`;

    // Get the current date in a desired format
    const currentDate = new Date();

    // Create a new ticket instance
    const ticket = new Ticket({ quantity, value, barcode, date: currentDate });

    // Save the ticket to the database
    await ticket.save();

    res.json(ticket);
  } catch (error) {
    console.error('Error generating ticket:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllTickets = async (req, res) => {
  try {
    // Fetch all tickets from the database
    const tickets = await Ticket.find();

    res.json(tickets);
  } catch (error) {
    console.error('Error fetching all tickets:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  generateTicket,
  getAllTickets,
};
