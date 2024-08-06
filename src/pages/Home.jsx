import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserView } from 'react-device-detect';
import { Grid, Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link as ScrollLink, Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import * as api from '../API/index';

import car_img1 from '../assets/Image/car_img1.jpg';
import car_img2 from '../assets/Image/car_img2.jpg';
import car_img3 from '../assets/Image/car_img3.jpg';
import car_img4 from '../assets/Image/car_img4.jpg';
import Host_image from '../assets/Image/host_image.jpg';

import WhyUs from './WhyUs';  // Import the WhyUs component
import Footer from '../components/Footer';
import TestimonialSlider from '../components/TestimonialSlider ';
import EnquiryModal from '../components/EnquiryModal';
import SigninModal from '../components/SigninModal';
import Navbar from '../components/Navbar';
import HostAuthModal from '../components/HostAuthModal';

const cardStyle = {
  height: '250px',
  width: '320px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  margin: '15px',
};

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [ishostSigninModalOpen, setIshostSigninModalOpen] = useState(false);

  const openSigninModal = () => {
    setIsSigninModalOpen(true);
  };

  const closeSigninModal = () => {
    setIsSigninModalOpen(false);
    // Navigate to dashboard after modal is closed
    // navigate('/dashboard');
  };

  const openEnquiryModal = () => setIsModalOpen(true);
  const closeEnquiryModal = () => setIsModalOpen(false);

  const openHostSigninModal = () => setIshostSigninModalOpen(true);
  const closeHostSigninModal = () => setIshostSigninModalOpen(false);

  const getUsers =async () =>{
    const result = await api.fetchUserlist();
    console.log(result);
    // toastSuccess("Users Get successfully");
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <BrowserView>
        <Helmet>
          <title>Prime Cars | Home</title>
          <style type="text/css">{`
            body {
              background-image: url("` + car_img4 + `");
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
            .enquire-button {
              background-color: #00796B;
              color: white;
              border-radius: 20px;
              padding: 10px 20px;
              text-transform: none;
              margin-top: 10px;
            }
            .enquire-button:hover {
              background-color: transparent;
              color: #00695C;
              border: 1px solid #00695C;
            }
            .carousel .slide img {
              height: 500px;
              object-fit: cover;
              width: 100%;
            }
            .carousel .carousel-status {
              display: none;
            }
          `}</style>
        </Helmet>
        <div style={{ height: '100dvh', backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <Navbar />
          
          <Box sx={{ flexGrow: 1, textAlign: 'center', width: '100%', height: '90dvh' }}>
            <Grid container spacing={1} sx={{ mt: 0 }}>
              <Grid item lg={6} xs={12}>
                <Typography variant='h3' style={{ marginTop: "130px", fontWeight: 600 }} color='whitesmoke' fontFamily="Poppins, serif">
                  Assured Car Rentals,<span style={{ fontSize: "28px" }}></span>
                </Typography>
                <Typography variant='h6' color='whitesmoke'>For Any Occasion!</Typography>
                <Box className="btn" style={{ marginTop: "15px" }} onClick={openSigninModal}>
                  Book Now
                </Box>
                <SigninModal open={isSigninModalOpen} handleClose={closeSigninModal} />
              </Grid>
              <Grid item lg={6} xs={12}></Grid>
            </Grid>
          </Box>
          <Element name="services" style={{ height: '250px', backgroundColor: 'white', textAlign: 'center', padding: '20px' }}>
            <Typography variant='h3' fontFamily='serif'>Services</Typography>
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
              <Grid item>
                <Card style={cardStyle}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={car_img1}
                    alt="Pick Up and Drop"
                  />
                  <CardContent>
                    <Typography variant='h6' fontFamily='Poppins, serif'>Pick Up and Drop</Typography>
                    <Typography variant='body2' fontFamily='Poppins, serif'>
                      Reliable pick up and drop services for your convenience.
                    </Typography>
                  </CardContent>
                </Card>
                <div style={{ textAlign: 'center' }}>
                  <Button className="enquire-button" onClick={openEnquiryModal}>Enquire Now</Button>
                  <EnquiryModal open={isModalOpen} handleClose={closeEnquiryModal} />
                </div>
              </Grid>
              <Grid item>
                <Card style={cardStyle}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={car_img3}
                    alt="Self Drive"
                  />
                  <CardContent>
                    <Typography variant='h6' fontFamily='Poppins, serif'>Self Drive</Typography>
                    <Typography variant='body2' fontFamily='Poppins, serif'>
                      Enjoy the freedom of driving yourself with our well-maintained cars.
                    </Typography>
                  </CardContent>
                </Card>
                <div style={{ textAlign: 'center' }}>
                  <Button className="enquire-button" onClick={openSigninModal}>Book Now</Button>
                </div>
              </Grid>
              <Grid item>
                <Card style={cardStyle}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Host_image}
                    alt="Hire for Corporate"
                  />
                  <CardContent>
                    <Typography variant='h6' fontFamily='Poppins, serif'>Become a Host</Typography>
                    <Typography variant='body2' fontFamily='Poppins, serif'>
                     Start a Safety Vehicel Assurance and Hashlefree Transcation  With Us .
                    </Typography>
                  </CardContent>
                </Card>
                <div style={{ textAlign: 'center' }}>
                  <Button className="enquire-button" onClick={openHostSigninModal} >Start Now</Button>
                <HostAuthModal open={ishostSigninModalOpen} handleClose={closeHostSigninModal} />

                </div>
              </Grid>
            </Grid>
          </Element>
          <br/>

          <Element name="about" style={{ height: '200px', backgroundColor: 'white', textAlign: 'center', marginTop: "170px" }}>
            <Typography variant='h3' fontFamily='serif'>About Us</Typography>
            <br/>
            <div className="App">
              <TestimonialSlider />
            </div>
          </Element>
          <br/>
          <br/>
          <WhyUs /> {/* Use the WhyUs component */}
          <div style={{ marginTop: "50px" }}>
            <Footer />
          </div>
        </div>
      </BrowserView>
    </>
  );
}

export default Home;
