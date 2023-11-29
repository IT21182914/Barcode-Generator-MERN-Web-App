const Ticket = require('../models/ticket');

const generateTicket = async (req, res) => {
  try {
    const { quantity, value } = req.body;

    // Generate unique barcode based on the current count
    const barcode = `BRHUGUGUG${await Ticket.countDocuments() + 1}`;

    const ticket = new Ticket({ quantity, value, barcode });
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
