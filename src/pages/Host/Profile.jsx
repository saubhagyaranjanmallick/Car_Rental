import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HostNavbar from '../../components/HostNavbar'; // Adjust the import path if needed
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
  Input,
  Box,Dialog,DialogContent,DialogTitle,DialogActions
} from '@mui/material';
import Check from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaymentIcon from '@mui/icons-material/Payment';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import { PhotoCamera } from '@mui/icons-material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { toastSuccess,toastError } from '../../components/Toast';
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
  const [uploadedImages, setUploadedImages] = useState([]);
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carColor, setCarColor] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [fastTag, setFastTag] = useState('');
  const [musicSystem, setMusicSystem] = useState('');
  const [ac, setAc] = useState('');
  const [parkingCamera, setParkingCamera] = useState('');
  const [fueltype, setFueltype] = useState('');

  const [bankName, setBankName] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [bankBranch, setBankBranch] = useState('');
  const [accountType, setAccountType] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('');

  // Handler functions for dropdown changes
  const handleCarBrandChange = (event) => setCarBrand(event.target.value);
  const handleCarModelChange = (event) => setCarModel(event.target.value);
  const handleCarYearChange = (event) => setCarYear(event.target.value);
  const handleCarColorChange = (event) => setCarColor(event.target.value);
  const handleSeatingCapacityChange = (event) => setSeatingCapacity(event.target.value);
  const handleFastTagChange = (event) => setFastTag(event.target.value);
  const handleMusicSystemChange = (event) => setMusicSystem(event.target.value);
  const handleAcChange = (event) => setAc(event.target.value);
  const handleParkingCameraChange = (event) => setParkingCamera(event.target.value);
  const handleFueltypeChange = (event) => setFueltype(event.target.value);

  const handleBankNameChange = (event) => setBankName(event.target.value);
  const handleAccountTypeChange = (event) => setAccountType(event.target.value);
  const handleSwiftCodeChange = (event) => setSwiftCode(event.target.value);
  const handlePaymentFrequencyChange = (event) => setPaymentFrequency(event.target.value);

  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    // This will be used to ensure the "Profile" section is highlighted
    // when navigating to this page.
  }, [location]);

  const handleStepClick = (step) => {
    setActiveStep(step);
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
            <Grid container spacing={3} sx={{mt:1}}>
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
                <TextField
                  fullWidth
                  label="State"
                  value={location.state?.host?.state || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="Country"
                  value={location.state?.host?.country || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  label="PIN Code"
                  value={location.state?.host?.pin || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
               Upload Photo
            
              <Input
                  fullWidth
                  label="Upload Photo"
                  type='file'
                
                />
            <Button  variant='contained' color='success'  sx={{mt:2 , float:"right" , textTransform:"capitalize"}}>Save Details</Button>
               
              </Grid>
            </Grid>
          </CardContent>
        );

      case 1:
        return (
          <CardContent>
            <Typography style={{ color: '#00695C', fontWeight: 600, fontSize: '22px' }}>
              Vehicle Details
            </Typography>
            <Divider />
            {/* Render vehicle details here */}
            <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Car Brand</InputLabel>
                    <Select
                      value={carBrand}
                      onChange={handleCarBrandChange}
                      label="Car Brand"
                    >
                      <MenuItem value="Toyota">Toyota</MenuItem>
                      <MenuItem value="Honda">Honda</MenuItem>
                      <MenuItem value="Ford">Ford</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Car Model Number</InputLabel>
                    <Select
                      value={carModel}
                      onChange={handleCarModelChange}
                      label="Car Model Number"
                    >
                      <MenuItem value="Corolla">Corolla</MenuItem>
                      <MenuItem value="Civic">Civic</MenuItem>
                      <MenuItem value="Focus">Focus</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Car Year</InputLabel>
                    <Select
                      value={carYear}
                      onChange={handleCarYearChange}
                      label="Car Year"
                    >
                      <MenuItem value="2020">2020</MenuItem>
                      <MenuItem value="2021">2021</MenuItem>
                      <MenuItem value="2022">2022</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Car Color</InputLabel>
                    <Select
                      value={carColor}
                      onChange={handleCarColorChange}
                      label="Car Color"
                    >
                      <MenuItem value="Red">Red</MenuItem>
                      <MenuItem value="Blue">Blue</MenuItem>
                      <MenuItem value="Black">Black</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Seating Capacity</InputLabel>
                    <Select
                      value={seatingCapacity}
                      onChange={handleSeatingCapacityChange}
                      label="Seating Capacity"
                    >
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="12">12</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Fast Tag</InputLabel>
                    <Select
                      value={fastTag}
                      onChange={handleFastTagChange}
                      label="Fast Tag"
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                      <MenuItem value="N/A">N/A</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Music System</InputLabel>
                    <Select
                      value={musicSystem}
                      onChange={handleMusicSystemChange}
                      label="Music System"
                    >
                      <MenuItem value="Basic">Basic</MenuItem>
                      <MenuItem value="Advanced">Advanced</MenuItem>
                      <MenuItem value="Premium">Premium</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>AC</InputLabel>
                    <Select
                      value={ac}
                      onChange={handleAcChange}
                      label="AC"
                    >
                      <MenuItem value="Manual">Manual</MenuItem>
                      <MenuItem value="Automatic">Automatic</MenuItem>
                      <MenuItem value="Climate Control">Climate Control</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Parking Camera</InputLabel>
                    <Select
                      value={parkingCamera}
                      onChange={handleParkingCameraChange}
                      label="Parking Camera"
                    >
                      <MenuItem value="None">None</MenuItem>
                      <MenuItem value="Rear">Rear</MenuItem>
                      <MenuItem value="360 Degree">360 Degree</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                <FormControl fullWidth>
                    <InputLabel>Fuel Type </InputLabel>
                    <Select
                      value={fueltype}
                      onChange={handleFueltypeChange}
                      label="Fuel Type"
                    >
                      <MenuItem value="None">Petrol</MenuItem>
                      <MenuItem value="Rear">Disel</MenuItem>
                      <MenuItem value="360 Degree">Electric</MenuItem>
                    </Select>
                  </FormControl>
                  </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField label="Car Registration No" fullWidth />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    fullWidth
                    label="Price Per Hour"
                    value="Price per hour value"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
               </Grid>
            <br/>
            <p style={{fontSize:"20px" ,fontWeight:500 , color:"#00695C"}}>Upload Car Photos</p>
            <Divider />
            

            <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} lg={3}>
            <Box
            sx={{
              height: "120px",
              width: "150px",
              border: "2px dotted #00695C",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              cursor: "pointer",
              mt:2,
              borderRadius: "15px"
            }}
            component="label"
          >
            <PhotoCamera />
            <Typography sx={{ ml: 1 }}>Upload Photo</Typography>
            <input hidden accept="image/*" multiple type="file" onChange={handleImageUpload} />
          </Box>
           <p style={{fontSize:"10px"}}>File must be in Jpg and jpeg format and max 3 photos.</p>
            </Grid>

          <Grid container item xs={12} lg={9} spacing={2}>
            {uploadedImages.map((image, index) => (
              <Grid item key={index}>
                <Card sx={{ width: 250, height: 200, overflow: 'hidden' }}>
                  <CardContent sx={{ padding: 0 }}>
                    <img src={image} alt={`Uploaded ${index}`} style={{ width: '100%', height: '100%', objectFit:"fill" }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Button  variant='contained' color='success'  style={{mt:2 , float:"right" , textTransform:"capitalize"}}>Save Details</Button>


          </CardContent>
        );
      case 2:
        return (
          <CardContent>
            <Typography style={{ color: '#00695C', fontWeight: 600, fontSize: '22px' }}>
              Payment Details
            </Typography>
            <Divider />
            <Grid container spacing={3} sx={{ mt: 0 }}>
            <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          label="Bank Name"
          value={bankName}
          onChange={handleBankNameChange}
          select
          InputProps={{
            readOnly: false,
          }}
          SelectProps={{
            native: true,
          }}
        >
          <option value="" />
          <option value="HDFC">HDFC Bank</option>
          <option value="SBI">State Bank of India</option>
          <option value="ICICI">ICICI Bank</option>
          <option value="Axis">Axis Bank</option>
          <option value="Kotak">Kotak Mahindra Bank</option>
          <option value="Yes">Yes Bank</option>
          <option value="PNB">Punjab National Bank</option>
          <option value="IDFC">IDFC FIRST Bank</option>
          <option value="Citi">Citi Bank</option>
          <option value="BankOfBaroda">Bank of Baroda</option>
        </TextField>
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          label="Account Holder Name"
          value={accountHolderName}
          onChange={(e) => setAccountHolderName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          label="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          label="IFSC Code"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          label="Bank Branch"
          value={bankBranch}
          onChange={(e) => setBankBranch(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          label="Account Type"
          value={accountType}
          onChange={handleAccountTypeChange}
          select
          InputProps={{
            readOnly: false,
          }}
          SelectProps={{
            native: true,
          }}
        >
          <option value=""></option>
          <option value="Savings">Savings</option>
          <option value="Current">Current</option>
          <option value="Fixed">Fixed Deposit</option>
          <option value="Recurring">Recurring Deposit</option>
        </TextField>
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          label="SWIFT/BIC Code"
          value={swiftCode}
          onChange={handleSwiftCodeChange}
          select
          InputProps={{
            readOnly: false,
          }}
          SelectProps={{
            native: true,
          }}
        >
          <option value=""></option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </TextField>
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          label="Account Link Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          label="Payment Frequency"
          value={paymentFrequency}
          onChange={handlePaymentFrequencyChange}
          select
          InputProps={{
            readOnly: false,
          }}
          SelectProps={{
            native: true,
          }}
        >
          <option value="" ></option>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
        </TextField>
        <Button
          variant='contained'
          color='success'
          style={{ mt: 2, float: "right", textTransform: "capitalize", marginTop: "10px" }}
          onClick={handleProceed}
        >
          Proceed
        </Button>
      </Grid>
            </Grid>

          </CardContent>
        );
      default:
        return null;
    }
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
  };
  
  const handleProceed = () => {
    setOpenModal(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Function to handle final submit
  const handleFinalSubmit = () => {
    // Implement final submit logic here
    setOpenModal(false);
    toastSuccess("Data has been submitted successfully.");
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ backgroundColor: '#f5f5f5', height: '100vh', width: '100vw', flexGrow: 1 }}>
        <HostNavbar />
        <div style={{ margin: '15px' }}> {/* Adjust margin for drawer width */}
          <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
              {steps.map((step, index) => (
                <Step key={step.label} onClick={() => handleStepClick(index)}>
                  <StepLabel
                    StepIconComponent={(props) => <QontoStepIcon {...props} icon={step.icon} />}
                  >
                    {step.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
          <Card sx={{ p: 1, mt: 2 , m:1 }}> {/* Add some top margin to separate the card from the stepper */}
            {renderStepContent(activeStep)}
          </Card>
          <br/>
           {/* Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} >
        <DialogTitle style={{textAlign:"center" , color:"#26A69A" , fontWeight:"600", margin:"10px" , fontSize:"22px"}}>Confirm Submission</DialogTitle>
        <DialogContent>
          <p>Are you sure you want submit the data?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} variant='contained' color="warning" size='small' sx={{textTransform:"capitalize"}}>
            No
          </Button>
          <Button onClick={handleFinalSubmit} variant='contained' color="success" size='small' sx={{textTransform:"capitalize"}}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;
