import React, { useState, useEffect } from 'react';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch tickets from the database
    fetch('http://localhost:5000/api/tickets')
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Generated Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets generated yet.</p>
      ) : (
        <table className="table-auto border-collapse w-96">
          <thead>
            <tr>
              <th className="border p-2">Ticket Number</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Value (Rupees)</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td className="border p-2">{ticket.barcode}</td>
                <td className="border p-2">{ticket.quantity}</td>
                <td className="border p-2">{ticket.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TicketList;
