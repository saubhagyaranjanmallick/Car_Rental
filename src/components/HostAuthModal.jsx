import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useNavigate } from 'react-router-dom';
import * as api from '../API/index';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #6E6E6E',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const HostAuthModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginType, setLoginType] = useState('otp'); // 'otp' or 'password'
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    location: '',
    otp: '',
  });
  
  const [useOtpLogin, setUseOtpLogin] = useState(true); // Track whether to use OTP login
  const [showOtpField, setShowOtpField] = useState(false); // Track when to show the OTP field

  const toggleSignUp = () => setIsSignUp(!isSignUp);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
    setUseOtpLogin(e.target.value === 'otp');
  };

  const handleSendOtp = async () => {
    const requestData ={
      email: formValues.email,
    }
    const response = await api.hostsendOtp(requestData);
    if (response.status === 200) {
      console.log('OTP sent successfully');
    }
    setShowOtpField(true);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    handleLoginproceed();
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  useEffect(() => {
    if (!open) {
      setIsSignUp(false);
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        password: '',
        location: '',
        otp: '',
      });
      setShowOtpField(false); // Reset OTP field visibility
    }
  }, [open]);

  const handleSignup = async () => {
    try {
      const requestData = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        contactNumber: formValues.contactNumber,
        password: formValues.password,
        location: formValues.location,
      };
      const result = await api.hostSignup(requestData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handlelogin = async () => {
    try {
      if (loginType === 'otp') {
        const requestData = {
          email: formValues.email,
          otp: formValues.otp,
        };
        const result = await api.hostLogin(requestData); // Adjust for OTP login
        if (result.status === 200) {
          console.log("Host login successfully");
          navigate('/hostdashboard');
        }
        else{
          console.log("Please Try Again",);
        }
      } else if (loginType === 'password') {
        const requestData = {
          email: formValues.email,
          password: formValues.password,
        };
        const result = await api.hostloginPassword(requestData); // Adjust for password login
        if (result.status === 200) {
          // navigate('/hostdashboard');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginproceed = () => {
    handlelogin();
  };

  return (
    <Modal open={open} >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center">
            <AssignmentIndIcon sx={{ color: '#00695C', height: 25, width: 25, mr: 1 }} />
            <Typography variant="h6">{isSignUp ? 'Host Sign Up' : 'Host Sign In'}</Typography>
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {isSignUp ? (
          <form onSubmit={handleSignUpSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  name="contactNumber"
                  value={formValues.contactNumber}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={formValues.location}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" className="enquire-button" fullWidth sx={{ mt: 3 }}>
              Submit
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSignInSubmit}>
            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <RadioGroup row value={loginType} onChange={handleLoginTypeChange}>
                <FormControlLabel value="otp" control={<Radio />} label="Login with OTP" />
                <FormControlLabel value="password" control={<Radio />} label="Login with Password" />
              </RadioGroup>
            </FormControl>

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

            {useOtpLogin && !showOtpField && (
              <Button type="submit" variant="contained" className="enquire-button" fullWidth sx={{ mt: 2 }}
              
                onClick={handleSendOtp}
              >
                Send OTP
              </Button>
            )}

            {useOtpLogin && showOtpField && (
              <>
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
                  Sign In
                </Button>
              </>
            )}

            {!useOtpLogin && (
              <>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" variant="contained" className="enquire-button" fullWidth sx={{ mt: 2 }}>
                  Sign In
                </Button>
              </>
            )}
          </form>
        )}

        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            {isSignUp ? (
              <Link href="#" onClick={toggleSignUp}>
                Already have an account? Sign In
              </Link>
            ) : (
              <Link href="#" onClick={toggleSignUp}>
                New User? Sign Up
              </Link>
            )}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default HostAuthModal;
