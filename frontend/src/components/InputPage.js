import React, { useState } from 'react';

const InputPage = ({ onGenerate }) => {
  const [quantity, setQuantity] = useState('');
  const [value, setValue] = useState('');

  const handleGenerate = () => {
    onGenerate({ quantity, value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Ticket/Stamp Generator</h1>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Quantity:</label>
          <input
            type="number"
            className="border rounded p-2 w-full"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Value in Rupees:</label>
          <input
            type="number"
            className="border rounded p-2 w-full"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={handleGenerate}
        >
          Generate and Preview
        </button>
      </div>
    </div>
  );
};

export default InputPage;
