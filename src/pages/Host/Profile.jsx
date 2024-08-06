import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HostNavbar from '../../components/HostNavbar '; // Adjust the import path if needed
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Avatar,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import Check from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaymentIcon from '@mui/icons-material/Payment';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';

// Define connector styles for stepper
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#00897B',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#00897B',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...(ownerState.active && {
    color: '#00897B',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#00897B',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className, icon } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      <Avatar style={{ marginBottom: 8, backgroundColor: completed ? '#00897B' : '#eaeaf0' }}>
        {icon}
      </Avatar>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = [
  { label: 'Profile Details', icon: <AccountCircleIcon /> },
  { label: 'Vehicle Details', icon: <DirectionsCarIcon /> },
  { label: 'Payment Details', icon: <PaymentIcon /> },
];

const Profile = () => {
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [state, setState] = useState(location.state?.host?.state || '');
  const [country, setCountry] = useState(location.state?.host?.country || '');

  useEffect(() => {
    // This will be used to ensure the "Profile" section is highlighted
    // when navigating to this page.
  }, [location]);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <CardContent>
            <Typography style={{ color: '#00695C', fontWeight: 600, fontSize: '22px' }}>
              Profile Details
            </Typography>
            <Divider />
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={location.state?.host?.name || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="Email"
                  value={location.state?.host?.email || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="Phone No"
                  value={location.state?.host?.phone || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="Alternate Ph No"
                  value={location.state?.host?.alternatePhone || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="PAN Card"
                  value={location.state?.host?.pan || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="Aadhar Card"
                  value={location.state?.host?.aadhar || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="Address"
                  value={location.state?.host?.address || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="District"
                  value={location.state?.host?.district || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FormControl fullWidth>
                  <InputLabel>State</InputLabel>
                  <Select
                    value={state}
                    onChange={handleStateChange}
                  >
                    <MenuItem value="State1">State1</MenuItem>
                    <MenuItem value="State2">State2</MenuItem>
                    <MenuItem value="State3">State3</MenuItem>
                    {/* Add more states as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={4}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={country}
                    onChange={handleCountryChange}
                  >
                    <MenuItem value="Country1">Country1</MenuItem>
                    <MenuItem value="Country2">Country2</MenuItem>
                    <MenuItem value="Country3">Country3</MenuItem>
                    {/* Add more countries as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="Pin"
                  value={location.state?.host?.pin || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 100, height: 100, border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {previewUrl ? (
                      <img src={previewUrl} alt="Uploaded" style={{ width: '100%', height: '100%' }} />
                    ) : (
                      <Typography>Photo</Typography>
                    )}
                  </div>
                </div>
                <input type="file" accept="image/*" onChange={handleFileChange} />
              </Grid>
            </Grid>
            <br />
            <Button variant="contained" color="primary" onClick={() => handleStepClick(activeStep - 1)}>
              SAVE
            </Button>
          </CardContent>
        );
      case 1:
        return (
          <CardContent>
            <Typography style={{ color: '#00695C', fontWeight: 600, fontSize: '22px' }}>
              Vehicle Details
            </Typography>
            <Divider />
            {/* Add vehicle details here */}
          </CardContent>
        );
      case 2:
        return (
          <CardContent>
            <Typography style={{ color: '#00695C', fontWeight: 600, fontSize: '22px' }}>
              Payment Details
            </Typography>
            <Divider />
            {/* Add payment details here */}
          </CardContent>
        );
      default:
        return null;
    }
  };

  return (
    <Stack direction="row" spacing={2} style={{ justifyContent: 'space-between' }}>
      <div>
        <HostNavbar />
      </div>
      <div style={{ width: '100%', maxWidth: '1200px', margin: 'auto' }}>
        <Card>
          <CardContent>
            <Typography style={{ color: '#00695C', fontWeight: 600, fontSize: '30px' }}>
              Profile
            </Typography>
            <Divider />
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepLabel StepIconComponent={() => <QontoStepIcon icon={step.icon} completed={activeStep > index} active={activeStep === index} />}>
                    {step.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            {renderStepContent(activeStep)}
          </CardContent>
        </Card>
      </div>
    </Stack>
  );
};

export default Profile;
