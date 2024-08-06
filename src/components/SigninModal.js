import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #6E6E6E',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const SigninModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    otp: '',
  });

  const toggleSignUp = () => setIsSignUp(!isSignUp);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in form submission logic
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up form submission logic
  };

  useEffect(() => {
    if (!open) {
      setIsSignUp(false);
      setFormValues({
        name: '',
        email: '',
        phoneNumber: '',
        otp: '',
      });
    }
  }, [open]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
            <LockIcon onClick={()=>{navigate('/dashboard')}} sx={{ color: '#00695C', height: 25, width: 25, mr: 1 }} />
            <Typography variant="h6">    {isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {isSignUp ? (
          <form onSubmit={handleSignUpSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" className="enquire-button"  fullWidth sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSignInSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="OTP"
              name="otp"
              value={formValues.otp}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" className="enquire-button" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
            <Box textAlign="center" mt={2}>
              <Typography variant="body2">
                New User?{' '}
                <Link href="#" onClick={toggleSignUp}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </form>
        )}
      </Box>
    </Modal>
  );
};

export default SigninModal;
