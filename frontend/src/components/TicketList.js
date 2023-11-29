import React, { useState, useEffect } from 'react';
import { format, isValid, parseISO } from 'date-fns'; // Import the required functions

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch tickets from the database
    fetch('http://localhost:5000/api/tickets/all')
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, []);

  const handleGoBack = () => {
    // Redirect to http://localhost:3000/
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <div className="flex flex-col items-start mt-8 ml-4"> {/* Adjusted styling for the button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleGoBack}
      >
        &#8592; Back
      </button>
      <div className="flex flex-col items-center mx-auto"> {/* Centered styling for the table */}
        <h2 className="text-2xl font-bold mb-4">Generated Tickets</h2>
        {tickets.length === 0 ? (
          <p>No tickets generated yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-3 border-b">Ticket Number</th>
                  <th className="py-2 px-3 border-b">Quantity</th>
                  <th className="py-2 px-3 border-b">Value (Rupees)</th>
                  <th className="py-2 px-3 border-b">Date</th>
                  {/* Add the Date column */}
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket._id}>
                    <td className="py-2 px-3 border-b">{ticket.barcode}</td>
                    <td className="py-2 px-3 border-b">{ticket.quantity}</td>
                    <td className="py-2 px-3 border-b">{ticket.value}</td>
                    <td className="py-2 px-3 border-b">
                      {isValid(parseISO(ticket.date))
                        ? format(parseISO(ticket.date), 'yyyy-MM-dd HH:mm:ss')
                        : 'Invalid Date'}
                    </td>
                    {/* Display the formatted Date value */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketList;
