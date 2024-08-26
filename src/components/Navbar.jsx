import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SigninModal from './SigninModal';
import HostAuthModal from './HostAuthModal';
import axios from 'axios';
import * as api from '../API/index';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [ishostSigninModalOpen, setIshostSigninModalOpen] = useState(false);
  const [cityName, setCityName] = useState('Current Location');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)'); // Media query for mobile view

  const openHostSigninModal = () => setIshostSigninModalOpen(true);
  const closeHostSigninModal = () => setIshostSigninModalOpen(false);
  const openSigninModal = () => setIsSigninModalOpen(true);
  const closeSigninModal = () => setIsSigninModalOpen(false);

  const getLocation = async (latitude, longitude) => {
    const requestData = { latitude, longitude };
    try {
      const response = await api.getCity(requestData);
      return response.data.city;
    } catch (error) {
      console.error('Error fetching city data:', error);
      return 'Unknown Location';
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const city = await getLocation(latitude, longitude);
          setCityName(city);
        },
        (error) => {
          console.error('Error getting location: ', error.message);
          setCityName('Location Unavailable');
        }
      );
    } else {
      setCityName('Geolocation Not Supported');
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button onClick={() => navigate('/')}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ScrollLink to="services" smooth={true} duration={500}>
            <ListItemText primary="Services" />
          </ScrollLink>
        </ListItem>
        <ListItem button>
          <ScrollLink to="about" smooth={true} duration={500}>
            <ListItemText primary="About" />
          </ScrollLink>
        </ListItem>
        <ListItem button>
          <ScrollLink to="why-us" smooth={true} duration={500}>
            <ListItemText primary="Why Us" />
          </ScrollLink>
        </ListItem>
        <ListItem button onClick={openSigninModal}>
          <ListItemText primary="Self Drive Car" />
        </ListItem>
        <ListItem button onClick={openHostSigninModal}>
          <ListItemText primary="Become a Host" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>
            PrimeCars
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon />
              <Typography variant="subtitle1" style={{ marginLeft: '5px', marginRight: '20px' }}>
                {cityName}
              </Typography>
              <Button sx={{ textTransform: 'capitalize' }} color="inherit" onClick={() => navigate('/')}>
                Home
              </Button>
              <ScrollLink to="services" smooth={true} duration={500}>
                <Button sx={{ textTransform: 'capitalize' }} color="inherit">
                  Services
                </Button>
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500}>
                <Button sx={{ textTransform: 'capitalize' }} color="inherit">
                  About
                </Button>
              </ScrollLink>
              <ScrollLink to="why-us" smooth={true} duration={500}>
                <Button sx={{ textTransform: 'capitalize' }} color="inherit">
                  Why Us
                </Button>
              </ScrollLink>
              <Button sx={{ textTransform: 'capitalize', marginLeft: '10px' }} color="inherit" onClick={openSigninModal}>
                Self Drive Car
              </Button>
              <SigninModal open={isSigninModalOpen} handleClose={closeSigninModal} />
              <Button sx={{ textTransform: 'capitalize', marginLeft: '10px' }} color="inherit" onClick={openHostSigninModal}>
                Become a Host
              </Button>
              <HostAuthModal open={ishostSigninModalOpen} handleClose={closeHostSigninModal} />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
