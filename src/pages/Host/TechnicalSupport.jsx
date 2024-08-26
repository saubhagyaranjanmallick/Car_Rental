import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HostNavbar from '../../components/HostNavbar'; // Adjust the import path if needed
import { TextField, Button, Box, Grid, Avatar, Stack } from '@mui/material'; // Assuming you're using Material-UI for styling
import { CallRounded, SendRounded,Email,Twitter } from '@mui/icons-material';
import cscare from "../../assets/Image/cscare.jpg";

const TechnicalSupport = () => {
  const location = useLocation();
  const [showMailCard, setShowMailCard] = useState(false);

  useEffect(() => {
    // Ensure the "Technical Support" section is highlighted in the HostNavbar
  }, [location]);

  const handleMailSupportClick = () => {
    setShowMailCard(true);
  };

  return (
    <div>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', width: '100dvw' }}>
        <HostNavbar />
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={3}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={cscare} // Replace with your image URL
                  alt="Customer Support"
                  style={{
                    width: '300px', // Set the width and height to make it a square
                    height: '300px',
                    borderRadius: '50%', // Makes the image circular
                    objectFit: 'cover', // Ensures the image covers the circle without distortion
                    float: "left"
                  }}
                />
              </div>
             
            </Grid>
            <Grid item xs={12} md={1}></Grid>

            <Grid item xs={12} md={6} sx={{ mt: 2 }}>
              {showMailCard ? (
                <Box
                  sx={{
                    backgroundColor: 'white',
                    p: 2,
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Contact Number"
                      variant="outlined"
                      margin="normal"
                    />
                  </Stack>

                  <TextField
                    fullWidth
                    label="Write Your Query"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={3}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <p style={{ fontSize: "12px" }}>
                      Mail us at primecars365@gmail.com
                    </p>
                    <Avatar variant="contained" sx={{ backgroundColor: "#00695C" }}>
                      <SendRounded fontSize='small' onClick={()=>{setShowMailCard(false)}} />
                    </Avatar>
                  </Box>
                </Box>
              ) : (
                    <div
                      sx={{
                        backgroundColor: 'white',
                        p: 2,
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                  <p  style={{ textAlign: 'center', fontWeight: 'bold' , fontSize:"26px" }}>
                    Prime Cars Customer Support
                  </p>
                  <p style={{ textAlign: 'center', mb: 2 }}>
                    24*7 Customer Call Support
                  </p>
                  <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={4}>
                      <Grid container alignItems="center" justifyContent="center">
                        <Email color="primary"/>&nbsp;
                        <p style={{fontSize:"12px"}}>primecars365@gmail.com</p>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Grid container alignItems="center" justifyContent="center">
                        <CallRounded color="primary" sx={{ mr: 1 }} />
                        <p style={{fontSize:"12px"}}>Toll-Free: 1800-123-4567</p>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Grid container alignItems="center" justifyContent="center">
                        <Twitter color="primary" sx={{ mr: 1 }} />
                        <p style={{fontSize:"12px"}}>primecars@support</p>
                      </Grid>
                    </Grid>
                    <Button onClick={handleMailSupportClick} sx={{ textTransform: "capitalize", borderRadius: 5, alignSelf: "center",mt:3}} variant='contained' color='info' >Customer Support</Button>&nbsp;
                    
                  </Grid>
                    </div>

                         )}
                </Grid>
            <Grid item xs={12} md={1}></Grid>

          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default TechnicalSupport;
