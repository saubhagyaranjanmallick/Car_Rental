import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Box, Stepper,StepLabel, Avatar, Grid, Typography, Step, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import car_7 from '../../assets/Image/car_7.jpg';
import car_img5 from '../../assets/Image/car_img5.jpg';
import car2 from '../../assets/Image/car2.webp';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CarCard from '../../components/CarCard';
import cartrip from "../../assets/Image/cartrip.jpg";
import login from "../../assets/Image/login.avif";
import date from "../../assets/Image/date.jpg";
import deposit from "../../assets/Image/deposit.jpg";
import Footer from '../../components/Footer';
import { Link as ScrollLink, Element } from 'react-scroll';
import UserNavbar from '../../components/UserNavbar ';


const carsData = [
  {
    id: 1,
    image: car_img5,
    rating: 4.83,
    trips: 60,
    model: 'Porsche Tycan',
    price: 350,
    distance: 7.8,
    fuel: 'Petrol',
    seats: 5,
    transmission: 'Manual',
  },
  {
    id: 2,
    image: car2,
    rating: 4.83,
    trips: 60,
    model: 'Hyundai Verna 2019',
    price: 150,
    distance: 7.8,
    fuel: 'Petrol',
    seats: 5,
    transmission: 'Manual',
  },
  // Add more car data here
];




const Dashboard = () => {
  const navigate = useNavigate();
  const [showCars, setShowCars] = useState(false);
  const [sortOption, setSortOption] = useState('');

  const handleArrowClick = () => {
    setShowCars(!showCars);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleProceed = () => {
    navigate('/carddetails');
  };

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

  return (
    <>
      <div style={{ backgroundColor: "#EEEEEE", overflowX: 'hidden' }}>
        <Box sx={{ backgroundColor: "#121212", width: "100vw" }}>
          <UserNavbar />
        </Box>
        <Box
          sx={{
            height: "300px",
            p: 5,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            backgroundImage: `url(${car_7})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#FFFFFF',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.4)',
              zIndex: 1,
            }}
          />
          <Box sx={{ position: 'relative', zIndex: 2, mt: 0}}>
            <p style={{ fontSize: "40px", padding: "15px", color: "white", fontWeight: 600}}>
            Self-Drive Car Rentals in India<br/>
           <span style={{fontSize:"38px" , color:"whitesmoke"}}>Book your drive now!</span> 
            </p>

            <Grid container justifyContent="center" spacing={2}>
              <Grid item lg={1}></Grid>
              <Grid item lg={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="location-label" sx={{ color: '#FFFFFF' }}>Location</InputLabel>
                  <Select
                    labelId="location-label"
                    id="location"
                    label="Location"
                    sx={{
                      color: '#FFFFFF',
                      '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FFFFFF',
                      },
                      '& .MuiSvgIcon-root': {
                        color: '#FFFFFF',
                      }
                    }}
                  >
                    <MenuItem value="location1">Bhubaneswar</MenuItem>
                    <MenuItem value="location2">Kolkata</MenuItem>
                    <MenuItem value="location3">Delhi NCR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={3}>
              
                <TextField
                  fullWidth
                  id="from-datetime"
                  label="From Date & Time"
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                    style: { color: '#FFFFFF' }
                  }}
                  sx={{
                    color: '#FFFFFF',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: '#FFFFFF',
                    },
                    '& .MuiSvgIcon-root': {
                      color: '#FFFFFF',
                    }
                  }}
                />
              </Grid>
              <Grid item lg={3}>
                <TextField
                  id="to-datetime"
                  label="To Date & Time"
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                    style: { color: '#FFFFFF' }
                  }}
                  sx={{
                    color: '#FFFFFF',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: '#FFFFFF',
                    },
                    '& .MuiSvgIcon-root': {
                      color: '#FFFFFF',
                    }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item lg={1}>
              <ScrollLink to="services" smooth={true} duration={500}>
                <Avatar sx={{ backgroundColor: "#00695C", color: "#FFFFFF", mt: 1 }} onClick={handleArrowClick}>
                  <ArrowForward />
                </Avatar>
                </ScrollLink>
              </Grid>
              <Grid item lg={1}></Grid>
            </Grid>
          </Box>


        </Box>
        <Box sx={{ p: 3, textAlign: "center", backgroundColor: "#121212", color: "whitesmoke", fontSize: "14px" }}>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item lg={3} md={3}>
              <span style={{ fontWeight: "bold", fontSize: "25px" }}>25,000+</span> <br />
              Verified Cars
            </Grid>
            <Grid item lg={3} md={3}>
              <span style={{ fontWeight: "bold", fontSize: "25px" }}>2 Billion+</span> <br />
              KMs Driven
            </Grid>
            <Grid item lg={3} md={3}>
              <span style={{ fontWeight: "bold", fontSize: "25px" }}>38+ Cities</span> <br />
              And Counting...
            </Grid>
            <Grid item lg={3} md={3}>
              <span style={{ fontWeight: "bold", fontSize: "25px" }}>20+ Corporate Clients</span> <br />
              Live On Zoomcar platform
            </Grid>
          </Grid>
        </Box>
        <Element name="services" >
        {showCars ? 
        (
        <>
            <Grid container spacing={2} justifyContent="space-between" sx={{ m: 2 }}>
              <Grid item xs={6} sm={6} md={3}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Poppins', color: '#6E6E6E' }}>
                  {carsData.length} Cars Showing
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
            
              </Grid>
            </Grid>
            <Grid container justifyContent="left" spacing={2} sx={{ m: 0 }}>
              {carsData.map((car) => (
                <Grid item key={car.id}>
                  <CarCard car={car} />
                </Grid>
              ))}
            </Grid>
          </>
        ):
        (
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
        )}
        </Element>
        <Box sx={{p:5 , textAlign:"center"}}>
          {/* Our Locations */}
        </Box>
        <Footer/>
      
      </div>
    </>
  );
};

export default Dashboard;
