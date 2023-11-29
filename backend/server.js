// server.js

const express = require('express');
const connectDB = require('./db/conn');
const ticketRoutes = require('./routes/ticketRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/tickets', ticketRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`\nServer is running on PORT:${PORT} 🔥`);
});
