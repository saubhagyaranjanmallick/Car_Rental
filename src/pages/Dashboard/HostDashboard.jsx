// HostDashboard.js
import React from 'react';
import HostNavbar from '../../components/HostNavbar';
import { BrowserView } from 'react-device-detect';
import { Grid,Box,Step,StepLabel,Stepper} from '@mui/material';
import host_video from "../../assets/Image/host_video.mp4";
import login from "../../assets/Image/login.avif";
import car2 from "../../assets/Image/car2.webp";
import location from "../../assets/Image/location.png";
import history from "../../assets/Image/history.png";
import Footer from '../../components/Footer';
import award from "../../assets/Image/award.png";
import timestopped from "../../assets/Image/timestopped.png";
import timeresumed from "../../assets/Image/timeresumed.png";
import  time from "../../assets/Image/time.png";

import CardSlider from '../../components/CardSlider';

const HostDashboard = () => {

  const steps = [
    {
      image: login,
      text: 'SignUp in PrimeCar or use the Host app',
    },
    {
      image: location,
      text: 'Add Your Profile Details and Locations',
    },
    {
      image: car2,
      text: 'Add Your Car Details and Set Your Charges Per Hour',
    },
    {
      image: history,
      text: 'Review Your Transcations and History',
    },
  ];

  return (
    <>
      <BrowserView>
        <div style={{ height: '100dvh', width: '100dvw', backgroundColor: 'rgba(0,0,0,0.0)' }}>
          <HostNavbar />
          <Box
          sx={{
            height: "300px",
            p: 5,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden", // Ensure video doesn't overflow the box
            color: '#FFFFFF',
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: 0,
              left: 0,
              zIndex: -1, // Ensure video is behind the content
            }}
          >
            <source src={host_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  {/* Your content here */}
  <div style={{ zIndex: 1 }}>
    {/* Content to display over the video */}
  </div>
         </Box>
        <Box sx={{ p: 2, textAlign: "center", backgroundColor: "#121212", color: "whitesmoke", fontSize: "14px" }}>
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
              <span style={{ fontWeight: "bold", fontSize: "25px" }}>10+ Hosts</span> <br />
              Live On Primecars platform
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ p: 4, textAlign: "center", backgroundColor: "#EEEEEE", color: "black", fontSize: "14px" }}>
          <p style={{fontSize:"23px" , padding:"10px"}}>  How to become a Host in Pune with Prime Cars? </p>
          <Stepper alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>
                  <img src={step.image} alt={`Step ${index + 1}`} style={{ width: 100, height: 100, marginBottom: 2 , borderRadius:5 }} />
                  <div style={{fontSize:"14px"}}>{step.text}</div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={{ p: 4, textAlign: "center", color: "black", fontSize: "24px",minHeight:"250px" }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item lg={5}>

          <p style={{textAlign:"center",fontWeight:600,color:"#1B5E20",fontSize:"30px"}}>Best Complements  From  Our <br/>
         <span style={{color:"#E65100",fontWeight:500,fontSize:"24px"}}>Hosts in 2024!</span> </p>
           <img style={{height:120 , width:120}} src={award} alt='img'/>
          </Grid>
          {/* <Grid item lg={1}></Grid> */}
          <Grid item lg={6}>
             <CardSlider/>
          </Grid>
          <Grid item lg={1}></Grid>

       

         
        </Grid>
       
        </Box>
        <br/>
        <Box sx={{ p: 4, textAlign: "center", color: "black", fontSize: "24px",minHeight:"250px",backgroundColor:"#E0F2F1" }}>
          Why you share your car with us ?
          <br/>
          <Grid container  spacing={2} sx={{mt:3}}>
           <Grid item lg={4}>
            <img src={timestopped} alt='timestopped'/>
           <p style={{ mt: 2, fontSize: "18px", fontWeight: "bold",color:"#6E6E6E" }}>
              100% Safety Assurance
            </p>
           </Grid>
           <Grid item lg={4}>
           <img src={time} alt='time'/>

           <p style={{ mt: 1, fontSize: "18px", fontWeight: "bold" ,color:"#6E6E6E" }}>
              Ontime Payments
            </p>
           </Grid>
           <Grid item lg={4}>
           <img src={timeresumed} alt='timeresumed'/>
            
           <p style={{ mt: 1, fontSize: "18px", fontWeight: "bold" , color:"#6E6E6E" }}>
              Trusted by 10k+ Hosts
            </p>
           </Grid>
          </Grid>
        </Box>
        <Footer/>
        </div>
      </BrowserView>
    </>
  );
};

export default HostDashboard;
