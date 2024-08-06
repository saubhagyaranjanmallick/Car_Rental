import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SupportIcon from '@mui/icons-material/Support';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Import Dashboard icon
import BusinessIcon from '@mui/icons-material/Business'; // Import Cab Details icon
import human_1 from '../assets/Image/human_1.jpg'; // Assuming you have a user image here
import { useNavigate, useLocation } from 'react-router-dom';

const HostNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // Start with drawer closed
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/hostdashboard' },
    { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
    // { text: 'Car Details', icon: <DirectionsCarIcon />, path: '/car-details' },
    { text: 'Cab Details', icon: <BusinessIcon />, path: '/cabDetails' }, // New menu item
    { text: 'Transactions', icon: <ReceiptIcon />, path: '/transactions' },
    { text: 'Technical Support', icon: <SupportIcon />, path: '/technical-support' },
    { text: 'Logout', icon: <ExitToAppIcon />, path: '/logout' },
  ];

  useEffect(() => {
    // Ensure the drawer state remains consistent with the route
    setDrawerOpen(false); // Close drawer on route change
  }, [location.pathname]);

  const handleMenuItemClick = (path) => {
    setDrawerOpen(false); // Close the drawer when a menu item is clicked
    navigate(path);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#121212', color: 'white', boxShadow: 'none', width: '100%' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              PrimeCars Host
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', textTransform: 'capitalize' }}>
              Download App
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{ width: 250, flexShrink: 0 }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar src={human_1} />
              </ListItemIcon>
              <ListItemText primary="Username" />
            </ListItem>
            <Divider/>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleMenuItemClick(item.path)}
                sx={{
                  backgroundColor: location.pathname === item.path ? '#00695C' : 'transparent',
                  color: location.pathname === item.path ? 'white' : 'inherit',
                  '&:hover': {
                    backgroundColor: '#00695C',
                    color: 'white',
                  },
                }}
              >
                <ListItemIcon sx={{ color: location.pathname === item.path ? 'white' : 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default HostNavbar;
