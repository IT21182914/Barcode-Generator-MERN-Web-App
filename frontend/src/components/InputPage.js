import React, { useState } from 'react';

const InputPage = ({ onGenerate }) => {
  const [quantity, setQuantity] = useState('');
  const [value, setValue] = useState('');

  const handleGenerate = () => {
    onGenerate({ quantity, value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Ticket/Stamp Generator</h1>
        <div className="mb-4">
          <label className="block text-gray-600">Quantity:</label>
          <input
            type="number"
            className="border rounded p-2"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Value in Rupees:</label>
          <input
            type="number"
            className="border rounded p-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleGenerate}
        >
          Generate and Preview
        </button>
      </div>
    </div>
  );
};

export default InputPage;
