// CarCard.js
import React from 'react';
import { Card, Box, Typography, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const CarCard = ({ car }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle click event
  const handleClick = () => {
    navigate('/cardetails', { state: { car } }); // Navigate to car details page and pass car details
  };

  return (
    <Card 
      sx={{ display: 'flex', flexDirection: 'column', p: 1, m: 1, width: 280, borderRadius: 2 }}
      onClick={handleClick} // Assign the event handler
    >
      <img src={car.image} alt="car" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <Typography variant="body2" color="textSecondary">
          {car.rating} ★ | {car.trips} Trips
        </Typography>
        <Typography variant="h6">{`₹${car.price}/hr`}</Typography>
      </Box>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {car.model}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {car.transmission} · {car.fuel} · {car.seats} Seats
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        {car.distance} km away
      </Typography>
      <Chip variant="contained" color="success" label="ACTIVE FASTAG" sx={{ mt: 2 }} />
    </Card>
  );
};

export default CarCard;
