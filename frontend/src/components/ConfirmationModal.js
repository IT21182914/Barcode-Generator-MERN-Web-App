import React from 'react';
import Barcode from 'react-barcode';

const ConfirmationModal = ({ data, onClose, onPrint }) => {
  const barcodeValue = `BRHUGUGUG${data.quantity}`;

  const handlePrint = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tickets/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: data.quantity, value: data.value }),
      });
  
      if (!response.ok) {
        throw new Error('Error generating ticket');
      }
  
      // Open the print dialog
      window.print();
      // Callback after printing (you can add additional logic as needed)
      onClose();
    } catch (error) {
      console.error('Error generating or printing ticket:', error.message);
      // Handle error as needed
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Print Confirmation</h2>
        <p>Quantity: {data.quantity}</p>
        <p>Value in Rupees: {data.value}</p>
        <p>Barcode: {barcodeValue}</p>
        <Barcode value={barcodeValue} />
        <div className="flex justify-between mt-8">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handlePrint}
          >
            Print
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
