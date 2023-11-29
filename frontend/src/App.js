import React, { useState } from 'react';
import InputPage from './components/InputPage';
import ConfirmationModal from './components/ConfirmationModal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ticketData, setTicketData] = useState(null);

  const handleGenerate = (data) => {
    setTicketData(data);
    setModalOpen(true);
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
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
