import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HostNavbar from '../../components/HostNavbar '; // Adjust the import path if needed

const TechnicalSupport = () => {
  const location = useLocation();

  useEffect(() => {
    // This will be used to ensure the "Technical Support" section is highlighted
    // when navigating to this page.
  }, [location]);

  return (
    <div>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', width: '100dvw' }}>
        <HostNavbar />
        <h1>Technical Support Page</h1>
        {/* Your technical support page content here */}
      </div>
    </div>
  );
};

export default TechnicalSupport;
