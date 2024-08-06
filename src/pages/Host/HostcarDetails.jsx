import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HostNavbar from '../../components/HostNavbar'; // Adjust the import path if needed

const HostCarDetails = () => {
  const location = useLocation();
  const car = location.state?.car;

  useEffect(() => {
    // This will be used to ensure the "Car Details" section is highlighted
    // when navigating to this page.
  }, [location]);

  console.log('Location State:', location.state); // Debugging statement

  return (
    <div>
      <div style={{ backgroundColor: '#f5f5f5', height: '100dvh', width: '100dvw' }}>
        <HostNavbar />
        <h1>Car Details Page</h1>
        {/* Use the `car` object to display car details if available */}
        <div>
          {car ? (
            <div>
              <h2>{car.name}</h2>
              <p>{car.details}</p>
              {/* Display other car details here */}
            </div>
          ) : (
            <p>No car details available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostCarDetails;
