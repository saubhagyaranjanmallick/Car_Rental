import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HostNavbar from '../../components/HostNavbar '; // Adjust the import path if needed

const Transactions = () => {
  const location = useLocation();

  useEffect(() => {
    // This will be used to ensure the "Transactions" section is highlighted
    // when navigating to this page.
  }, [location]);

  return (
    <div>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', width: '100dvw' }}>
        <HostNavbar />
        <h1>Transactions Page</h1>
        {/* Your transactions page content here */}
      </div>
    </div>
  );
};

export default Transactions;
