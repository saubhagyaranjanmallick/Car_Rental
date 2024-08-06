import React from 'react';
import { Element } from 'react-scroll';
import { Typography, Grid } from '@mui/material';
import { Build as BuildIcon, Support as SupportIcon,  Beenhere as  BeenhereIcon } from '@mui/icons-material';
// import icon_1 from "../assets/Icons/icon_1.png"; // Make sure this path is correct
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// Define CSS for gradient background
const gradientStyle = {
  background: 'linear-gradient(to right, #00695C, #6E6E6E)',
  padding: '20px',
  color: 'white',
};

const sectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '20px',
};

const iconStyle = {
  width: '50px',
  height: '50px',
  marginRight: '10px',
};

const textStyle = {
  fontFamily: 'Poppins, serif',
  color: '#f5f5f5',
};

const WhyUs = () => {
  return (
    <Element name="why-us" style={{ height: '250px', textAlign: 'center', marginTop: "170px", position: 'relative' }}>
      <Typography variant='h3' fontFamily='serif' color='black'>Why Us</Typography>
      <br />

      <div style={gradientStyle}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <div style={sectionStyle}>
              <BeenhereIcon alt="Easy To Book" style={iconStyle} />
              <div style={textStyle}>
                <Typography variant='h5'>Easy To Book</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={sectionStyle}>
              <BuildIcon style={iconStyle} />
              <div style={textStyle}>
                <Typography variant='h5'>Well Maintained Cars</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={sectionStyle}>
              <SupportIcon style={iconStyle} />
              <div style={textStyle}>
                <Typography variant='h6'>24x7 Assistance Support</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={sectionStyle}>
            <CurrencyRupeeIcon style={iconStyle} />
              <div style={textStyle}>
                <Typography variant='h6'>Zero Security Deposit</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Element>
  );
}

export default WhyUs;
