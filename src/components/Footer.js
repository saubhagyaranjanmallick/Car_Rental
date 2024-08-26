import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, YouTube as YouTubeIcon, Mail as MailIcon } from '@mui/icons-material';
import map from "../assets/Image/map.jpg";
// Define CSS for social icons
const iconStyle = {
  color: '#00796B',
  fontSize: '30px',
  marginRight: '10px',
};

const linkStyle = {
  color: '#00796B',
  textDecoration: 'none',
  fontFamily: 'Poppins, serif',
};

const cardStyle = {
  height: '250px',
  width: '100%',
  textAlign: 'center',
};

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', p: 3, mt: 0 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Useful Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' fontFamily='serif' color='#00796B'>Useful Links</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant='body1' sx={linkStyle}>About Us</Typography><br />
            <Typography variant='body1' sx={linkStyle}>Services</Typography><br />
            <Typography variant='body1' sx={linkStyle}>Contact</Typography>
          </Box>
        </Grid>

        {/* Social Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' fontFamily='serif' color='#00796B'>Follow Us</Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
              <MailIcon sx={iconStyle} />
            </IconButton>
            <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <TwitterIcon sx={iconStyle} />
            </IconButton>
            <IconButton href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon sx={iconStyle} />
            </IconButton>
            <IconButton href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={iconStyle} />
            </IconButton>
            <IconButton href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon sx={iconStyle} />
            </IconButton>
          </Box>
        </Grid>

        {/* Location Card with Dummy Map Image */}
        <Grid item xs={12} sm={4}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant='h6' fontFamily='serif' fontWeight="500" color='#00796B'>Our Location</Typography>
              <CardMedia
                component="img"
                height="150"
                image={map}
                alt="Dummy Google Maps"
              />
              <p style={{ fontSize: "10px" , color:"#0e849d",textAlign:"left" }}>
               📌 DLF Cybercity,756400,Bhubaneswar,Odisha. 
                 
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Copyright Text */}
      <Box sx={{ textAlign: 'left', mt: 1, color: '#333' }}>
        <Typography variant='body2' fontFamily='Poppins, serif'>
          &copy; {new Date().getFullYear()} PrimeCars. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
