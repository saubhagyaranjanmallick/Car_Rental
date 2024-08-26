import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Box,Grid, Stepper, StepLabel, Step, Card, Typography, Button, Divider } from '@mui/material';
import nobook from '../assets/Image/nobook.jpg';
import login from "../assets/Image/login.avif";
import date from "../assets/Image/date.jpg";
import deposit from "../assets/Image/deposit.jpg";
import car2 from '../assets/Image/car2.webp';

const steps = [
  {
    image: login,
    text: 'Log onto zoomcar.com or use the app',
  },
  {
    image: date,
    text: 'Select city, date and time',
  },
  {
    image: deposit,
    text: 'Pick a car of your choice at 0 security deposit',
  },
  {
    image: car2,
    text: 'Zoomaway with the freedom of unlimited KMs',
  },
];

// Sample booking data for demonstration
const sampleBooking = {
  customerName: "John Doe",
  carImage: car2,
  carName: "Toyota Corolla",
  paymentStatus: "Paid",
  paymentMode: "Credit Card",
  bookingDuration: "3 days",
  pickUpPoint: "Pune Station",
  dropPoint: "Mumbai Airport",
};

const Booking = () => {
  // State to manage if there are bookings
  const [hasBooking, setHasBooking] = useState(true); // Change to true if bookings exist

  return (
    <>
      <div style={{ overflowX: 'hidden', backgroundColor: "#EEEEEE" }}>
        <Box sx={{ backgroundColor: "#121212", width: "100vw" }}>
          <Navbar />
        </Box>

        {/* Conditional rendering based on hasBooking state */}
        {!hasBooking ? (
          <Card sx={{ m: 2, minHeight: "200px", textAlign: "center", alignContent: "center" }}>
            <img src={nobook} alt="No Booking" style={{ height: "100px", width: "150px" }} />
            <p style={{ fontSize: "22px" }}>
              You have no bookings!<br />
              <span style={{ color: "#4CAF50", fontSize: "18px", fontWeight: 600 }}>
                Hurry up! Get your first booking up to 50% off in Prime Cars.
              </span>
            </p>
          </Card>
        ) : (
          <Card sx={{ m: 2, p: 4, textAlign: "left",}}>
            <Typography sx={{color:"#00695C"}} variant="h5" component="h2" gutterBottom>
              Booking Confirmation
            </Typography>
            <Divider/>
            <Grid container>
              <Grid item lg={6}>
                <p>Booking ID: 567BBS09</p>
                <p variant="body1" component="p" gutterBottom>
              Customer: {sampleBooking.customerName}
            </p>
            <p variant="body1" component="p" gutterBottom>
              Payment Status: {sampleBooking.paymentStatus}
            </p>
            <p variant="body1" component="p" gutterBottom>
              Payment Mode: {sampleBooking.paymentMode}
            </p>
           
              </Grid>
              <Grid item lg={3}>
              <p variant="h6" component="p" gutterBottom>
              {sampleBooking.carName}
            </p>
            <p variant="body1" component="p" gutterBottom>
              Booking Duration: {sampleBooking.bookingDuration}
            </p>
            <p variant="body1" component="p" gutterBottom>
              Pick-Up Point: {sampleBooking.pickUpPoint}
            </p>
            <p variant="body1" component="p" gutterBottom>
              Drop-Off Point: {sampleBooking.dropPoint}
            </p>
                </Grid>
                <Grid item lg={3}>
            <img src={sampleBooking.carImage} alt={sampleBooking.carName} style={{ height: "150px", width: "200px" }} />
                
                </Grid>
            </Grid>
           
           
           
            <Button variant="contained" color="primary" sx={{ mt: 2, float:"right" }}>
              View Booking Details
            </Button>
          </Card>
        )}

        <Box sx={{ p: 6, textAlign: "center", backgroundColor: "#EEEEEE", color: "black", fontSize: "14px" }}>
          <p style={{ fontSize: "23px", padding: "10px" }}>How to book Self Drive Cars in Pune with Prime Cars?</p>
          <Stepper alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>
                  <img
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    style={{ width: 100, height: 100, marginBottom: 2, borderRadius: 5 }}
                  />
                  <div style={{ fontSize: "18px" }}>{step.text}</div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </>
  );
};

export default Booking;
