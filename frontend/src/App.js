import React, { useState } from 'react';
import InputPage from './components/InputPage';
import ConfirmationModal from './components/ConfirmationModal';
import Barcode from 'react-barcode';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ticketData, setTicketData] = useState(null);

  const handleGenerate = (data) => {
    setTicketData(data);
    setModalOpen(true);
  };

  const handlePrint = () => {
    // Logic for printing (you can integrate a printing library or use window.print())
    alert('Printing...');
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <InputPage onGenerate={handleGenerate} />
      {modalOpen && (
        <ConfirmationModal
          data={ticketData}
          onPrint={handlePrint}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
