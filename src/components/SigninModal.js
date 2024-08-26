import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import * as api from '../API/index';

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
  const [name,setName] = useState("");
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false); // Flag to show/hide OTP input and Sign In button

  const toggleSignUp = () => setIsSignUp(!isSignUp);

  const sendOtp = async () => {
    // Validate email and send OTP
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      // Here you would call the API to send OTP
      const requestData = { email };
      const response = await api.sendOtp(requestData);
      
      if (response) {
        alert("OTP sent to your email.");
        setIsOtpSent(true); // Show OTP field and Sign In button after successful OTP request
      }

    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP.");
    }
  };

  const userLogin = async () => {
    // Validate OTP
    if (otp.length !== 6) {
      alert("OTP must be 6 digits.");
      return;
    }

    try {
      const requestData = {
        email: email,
        otp: otp
      };

      const response = await api.login(requestData);
      if (response) {
        alert("User login successfully");
        navigate('/dashboard');
      }

    } catch (error) {
      console.error("Error during login:", error);
      alert("User login failed: " + error.message);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    userLogin();
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    // Handle sign-up form submission logic
    try {
      const requestData = {
        fname: name,
        email: email,
        phoneNumber: phoneNumber
      };
      const result = await api.signup(requestData);
      console.log(result);
      if(result){
        alert('User registered successfully');
        // navigate('/dashboard');
        setIsSignUp(false);
      }
    } catch (error) {
      console.log(error);
      alert('User already Exists , Pls try with another user' , error);
    }
  };

  useEffect(() => {
    if (!open) {
      setIsSignUp(false);
      setEmail('');
      setPhoneNumber('');
      setOtp('');
      setIsOtpSent(false);
    }
  }, [open]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <LockIcon  sx={{ color: '#00695C', height: 25, width: 25, mr: 1 }} />
            <Typography variant="h6">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" className="enquire-button" fullWidth sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </form>
        ) : (
          <>
            {/* First Step: Email and Send OTP */}
            {!isOtpSent ? (
              <Box>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  onClick={sendOtp}
                  variant="contained"
                  className="enquire-button"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Send OTP
                </Button>
              </Box>
            ) : (
              /* Second Step: Show Email, OTP and Sign In */
              <form onSubmit={handleSignInSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled // Disable to prevent changes after OTP is sent
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <Button type="submit" variant="contained" className="enquire-button" fullWidth sx={{ mt: 2 }}>
                  Sign In
                </Button>
              </form>
            )}
            <Box textAlign="center" mt={2}>
              <Typography variant="body2">
                New User?{' '}
                <Link href="#" onClick={toggleSignUp}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default SigninModal;
