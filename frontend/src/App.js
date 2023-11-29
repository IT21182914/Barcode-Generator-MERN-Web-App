import React, { useState } from 'react';
import InputPage from './components/InputPage';
import ConfirmationModal from './components/ConfirmationModal';
import TicketList from './components/TicketList'; // Import TicketList component

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ticketData, setTicketData] = useState(null);
  const [view, setView] = useState('input'); // 'input' or 'tickets'

  const handleGenerate = (data) => {
    setTicketData(data);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleViewTickets = () => {
    setView('tickets');
  };

  return (
    <div>
      {view === 'input' && (
        <InputPage
          onGenerate={handleGenerate}
          onViewTickets={handleViewTickets}
        />
      )}
      {view === 'tickets' && (
        <TicketList />
      )}
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
