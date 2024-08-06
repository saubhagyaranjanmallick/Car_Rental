import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Stepper,StepLabel,  Step, Card } from '@mui/material';
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


const Booking = () => {


  return (
    <>
      <div style={{overflowX: 'hidden',backgroundColor:"#EEEEEE" }}>
        <Box sx={{ backgroundColor: "#121212", width: "100vw" }}>
          <Navbar />
        </Box>
        <Card sx={{m:2,minHeight:"200px" , textAlign:"center" , alignContent:"center"}}>
        <img src={nobook} alt="No Booking" style={{height:"100px" , width:"150px"}} />
            <p style={{fontSize:"22px"}}>You have no bookings!<br/>
            <span style={{color:"#4CAF50",fontSize:"18px" , fontWeight:600}}>Hurry up Get first booking up to 50% Free in Prime Cars.  </span>
            </p>
        </Card>
        <Box sx={{ p: 6, textAlign: "center", backgroundColor: "#EEEEEE", color: "black", fontSize: "14px" }}>
          <p style={{fontSize:"23px" , padding:"10px"}}>  How to book Self Drive Cars in Pune with Prime Cars? </p>
          <Stepper alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>
                  <img src={step.image} alt={`Step ${index + 1}`} style={{ width: 100, height: 100, marginBottom: 2 , borderRadius:5 }} />
                  <div style={{fontSize:"18px"}}>{step.text}</div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
       
        {/* <Footer/> */}
      
      </div>
    </>
  );
};

export default Booking;
