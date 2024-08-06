import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HostNavbar from '../../components/HostNavbar '; // Adjust the import path if needed


const Cabdetails  = () => {
    const location = useLocation();

    useEffect(() => {
      // This will be used to ensure the "Profile" section is highlighted
      // when navigating to this page.
    }, [location]);
  return (
    <div style={{ display: 'flex' }}>
    <div style={{ backgroundColor: '#f5f5f5', height: '100dvh',width:"100dvw", flexGrow: 1 }}>
      <HostNavbar />
      <div style={{ padding: '20px' }}> {/* Adjust margin for drawer width */}
        <h1>Cab Details  Page</h1>
        {/* Your profile page content here */}
      </div>
    </div>
  </div>
  )
}

export default Cabdetails 