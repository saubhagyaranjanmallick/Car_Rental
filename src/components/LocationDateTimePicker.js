import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const LocationDateTimePicker = () => {
  const [location, setLocation] = useState('GPXM+5V Pune, Maharashtra, India');
  const [startDate, setStartDate] = useState(new Date('2024-08-01T12:00:00'));
  const [endDate, setEndDate] = useState(new Date('2024-08-01T16:00:00'));

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="location" style={{ display: 'block', marginBottom: '8px' }}>Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="start-date" style={{ display: 'block', marginBottom: '8px' }}>Start Date & Time</label>
        <DateTimePicker
          onChange={setStartDate}
          value={startDate}
          id="start-date"
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <label htmlFor="end-date" style={{ display: 'block', marginBottom: '8px' }}>End Date & Time</label>
        <DateTimePicker
          onChange={setEndDate}
          value={endDate}
          id="end-date"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default LocationDateTimePicker;
