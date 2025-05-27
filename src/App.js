// src/App.js
// src/App.js
import React, { useState, useEffect } from "react";
import Landing from "./components/Landing";
import SEO from "./components/SEO";
import UsageWarningModal from './components/UsageWarningModal'; // Import the modal

function App() {
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  useEffect(() => {
    const warningAccepted = localStorage.getItem('phloxWarningAccepted');
    if (warningAccepted !== 'true') {
      setIsWarningModalOpen(true);
    }
  }, []);

  const handleCloseWarningModal = () => {
    setIsWarningModalOpen(false);
  };

  return (
    <div className="App">
      <SEO />
      <Landing />
      <UsageWarningModal isOpen={isWarningModalOpen} onClose={handleCloseWarningModal} />
    </div>
  );
}

export default App;
