import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import human_1 from '../assets/Image/human_1.jpg';
import HostAuthModal from './HostAuthModal';

const UserNavbar = () => {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePath, setActivePath] = useState('');
  const [ishostSigninModalOpen, setIshostSigninModalOpen] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAvatarClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setActivePath(path);
    setDropdownOpen(false);
  };

  const openHostSigninModal = () => setIshostSigninModalOpen(true);
  const closeHostSigninModal = () => setIshostSigninModalOpen(false);

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                sx={{ textTransform: 'capitalize', marginRight: '10px' }}
                color="inherit"
                onClick={openHostSigninModal}
              >
                Become a Host
              </Button>
              <HostAuthModal open={ishostSigninModalOpen} handleClose={closeHostSigninModal} />
              <IconButton onClick={handleAvatarClick}>
                <Avatar src={human_1} sx={{ cursor: 'pointer' }} />
              </IconButton>
              {dropdownOpen && (
                <Card
                  ref={cardRef}
                  style={{
                    position: 'absolute',
                    top: '50px',
                    right: '0',
                    width: '250px',
                    height: '210px',
                    borderRadius: '3px',
                    zIndex: 10,
                  }}
                >
                  <List>
                    {['/', '/bookings', '/support', '/logout'].map((path, index) => {
                      const isActive = activePath === path;
                      const icons = [<PersonIcon />, <BookIcon />, <SupportAgentIcon />, <ExitToAppIcon />];
                      const labels = ['Profile', 'Bookings', 'Customer Support', 'Logout'];

                      return (
                        <ListItem
                          button
                          key={index}
                          onClick={() => handleNavigation(path)}
                          sx={{
                            backgroundColor: isActive ? '#00695C' : 'transparent',
                            color: isActive ? 'white' : 'inherit',
                            '&:hover': {
                              backgroundColor: '#00695C',
                              color: 'white',
                            },
                          }}
                        >
                          <ListItemIcon sx={{ color: isActive ? 'white' : 'inherit' }}>
                            {icons[index]}
                          </ListItemIcon>
                          <ListItemText
                            primary={labels[index]}
                            primaryTypographyProps={{
                              fontFamily: 'Poppins, sans-serif',
                              color: isActive ? 'white' : 'inherit',
                            }}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Card>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>

    
    </>
  );
};

export default UserNavbar;
