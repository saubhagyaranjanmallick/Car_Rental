// CarCard.js
import React from 'react';
import { Card, Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CarCard = ({ car }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle click event
  const handleClick = () => {
    navigate('/cardetails', { state: { car } }); // Navigate to car details page and pass car details
  };

  return (
    <Card 
      sx={{ display: 'flex', flexDirection: 'column', p: 2, m: 1, width: 280, borderRadius: 2 }}
      onClick={handleClick} // Assign the event handler
    >
      <img src={car.image} alt="car" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <p style={{fontSize:"14px"}}>
          {car.rating} ★ | {car.trips} Trips
        </p>
        <p>{`₹${car.price}/hr`}</p>
      </Box>
      <p  >
       <span style={{ fontWeight:500 , fontSize:"20px" }}> {car.model}</span> 
       <br/>
       {car.transmission} · {car.fuel} · {car.seats} Seats
        <br />
        {car.distance} km away
        <br />
      </p>
      <Stack direction="row" spacing={1}>
      <AccountCircleIcon/>
      <p style={{fontSize:"15px"}}>Hosted by Soam Jena</p>

      </Stack>
     
     
      {/* <Chip variant="outlined" color="success" label="Active Fast Tag Facility" sx={{ mt: 2 }} /> */}
    </Card>
  );
};

export default CarCard;
