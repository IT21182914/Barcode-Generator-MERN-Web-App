const Ticket = require('../models/ticket');
const { format } = require('date-fns');

const generateTicket = async (req, res) => {
  try {
    const { quantity, value } = req.body;

    // Generate unique barcode based on the current count
    const barcode = `BRHUGUGUG${await Ticket.countDocuments() + 1}`;

    // Get the current date in a desired format
    const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

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

module.exports = {
  generateTicket,
};
