import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, YouTube as YouTubeIcon, Mail as MailIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';

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
  height: '150px',
  width: '100%',
  textAlign: 'center',
};

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', p: 3,mt:0 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Useful Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' fontFamily='serif' color='#00796B'>Useful Links</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant='body1' sx={linkStyle}>About Us</Typography><br/>
            <Typography variant='body1' sx={linkStyle}>Services</Typography><br/>
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

        {/* Location Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant='h6' fontFamily='serif' color='#00796B'>Our Location</Typography>
              <CardMedia
                component="img"
                height="80"
                image="https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=14&size=150x150&key=YOUR_API_KEY"
                alt="Map Location"
              />
              <Typography variant='body2' sx={{ mt: 1 }}>123 Prime Street, New York, NY, 10001</Typography>
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
