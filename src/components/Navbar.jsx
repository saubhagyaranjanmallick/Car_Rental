import React,{useState} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SigninModal from './SigninModal';
import HostAuthModal from './HostAuthModal';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [ishostSigninModalOpen, setIshostSigninModalOpen] = useState(false);

  const openHostSigninModal = () => setIshostSigninModalOpen(true);
  const closeHostSigninModal = () => setIshostSigninModalOpen(false);

  const openSigninModal = () => {
    setIsSigninModalOpen(true);
  };

  const closeSigninModal = () => {
    setIsSigninModalOpen(false);

  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>
            PrimeCars
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon />
            <Typography variant="subtitle1" style={{ marginLeft: '5px', marginRight: '20px' }}>
              Current Location
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
            <Button sx={{ textTransform: 'capitalize', marginLeft: '10px' }} color="inherit"  onClick={openHostSigninModal}>
              Become a Host
            </Button>
            <HostAuthModal open={ishostSigninModalOpen} handleClose={closeHostSigninModal} />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
