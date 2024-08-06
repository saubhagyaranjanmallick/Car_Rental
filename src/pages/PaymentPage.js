import React, { useState } from 'react';
import {
  Card,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Typography,
  Box,
  Grid,
  Stack,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PhoneIcon from '@mui/icons-material/Phone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MailIcon from '@mui/icons-material/Mail';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Navbar from '../components/Navbar';
import done from "../assets/Icons/done.gif";
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const navigate =useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    alternatePhone: '',
    email: '',
    location: '',
    address: '',
    dlNumber: '',
    panCard: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [scannerModalOpen, setScannerModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleCustomerDetailsChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleOpenScannerModal = () => {
    setScannerModalOpen(true);
  };

  const handleCloseScannerModal = () => {
    setScannerModalOpen(false);
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
    navigate('/bookings')
  };

  return (
            <>
                    <Box sx={{backgroundColor:"#121212" , width:"100dvw"}}>
                        <Navbar  />
                        </Box>  
                        <div style={{ padding: '20px' }}>
        <p style={{ fontWeight:500 , fontSize:"25px",color:"#00695C" }} >Customer Details</p>

      <Card sx={{ padding: '20px', margin: '1px' }}>
        <Grid container spacing={2}>
          <Grid item lg={4} md={6} xs={12}>
            <TextField
              label="Name"
              name="name"
              value={customerDetails.name}
              onChange={handleCustomerDetailsChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <PersonIcon position="start" />,
              }}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <TextField
              label="Phone"
              name="phone"
              value={customerDetails.phone}
              onChange={handleCustomerDetailsChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <PhoneIcon position="start" />,
              }}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <TextField
              label="Alternate No"
              name="alternatePhone"
              value={customerDetails.alternatePhone}
              onChange={handleCustomerDetailsChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <PhoneIcon position="start" />,
              }}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <TextField
              label="Email ID"
              name="email"
              value={customerDetails.email}
              onChange={handleCustomerDetailsChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <MailIcon position="start" />,
              }}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <TextField
              label="Location"
              name="location"
              value={customerDetails.location}
              onChange={handleCustomerDetailsChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <LocationOnIcon position="start" />,
              }}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <TextField
              label="Address"
              name="address"
              value={customerDetails.address}
              onChange={handleCustomerDetailsChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <HomeIcon position="start" />,
              }}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <TextField
              label="DL No"
              name="dlNumber"
              value={customerDetails.dlNumber}
              onChange={handleCustomerDetailsChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <AssignmentIndIcon position="start" />,
              }}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <TextField
              label="PAN Card No"
              name="panCard"
              value={customerDetails.panCard}
              onChange={handleCustomerDetailsChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <AlternateEmailIcon position="start" />,
              }}
            />
          </Grid>
        </Grid>
      </Card>

      <p style={{ fontWeight:500 , fontSize:"25px" , color:"#00695C" }} >Payment Details</p>

      <Card sx={{ padding: '20px', margin: '5px', marginTop: '20px' }}>

  <Grid container spacing={2}>
    <Grid item lg={4} md={6} xs={12}>
      <TextField
        label="Customer Name"
        value={"Saubhagy Mallick"}
        fullWidth
        margin="normal"
        disabled
        InputProps={{
          startAdornment: <PersonIcon position="start" />,
        }}
      />
    </Grid>
    <Grid item lg={4} md={6} xs={12}>
      <FormControl fullWidth margin="normal">
        {/* <InputLabel>Payment Method</InputLabel> */}
        <Select
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
          startAdornment={<PaymentIcon position="start" />}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Payment Method
          </MenuItem>
          <MenuItem value="Cash">Cash</MenuItem>
          <MenuItem value="PhonePay">Phone Pay</MenuItem>
          <MenuItem value="CreditCard">Credit Card</MenuItem>
          <MenuItem value="NetBanking">Net Banking</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item lg={1} md={6} xs={12}></Grid>
    <Grid item lg={3} md={6} xs={12}>
      <Button
        variant="contained"
        color="success"
        onClick={handleOpenScannerModal}
        
        sx={{ marginTop: '24px',float:"center" }} // Align with other form elements
      >
        Proceed to Payment
      </Button>
    </Grid>
  </Grid>
</Card>


      {/* Scanner Modal */}
      <Modal
        open={scannerModalOpen}
        onClose={handleCloseScannerModal}
        aria-labelledby="scanner-modal"
        aria-describedby="scanner-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #EEEEEE',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <QrCodeScannerIcon style={{ fontSize: '48px', marginBottom: '10px' }} />
          <p id="scanner-modal-description" sx={{ mt: 2 }}>
            Scan the QR code or proceed.
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseScannerModal}
            sx={{ marginTop: '20px' }}
          >
            OK
          </Button>
        </Box>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        open={confirmationModalOpen}
        onClose={handleCloseConfirmationModal}
        aria-labelledby="confirmation-modal"
        aria-describedby="confirmation-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #EEEEEE',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          {/* <DoneIcon style={{ fontSize: '48px', color: 'green', marginBottom: '10px' }} /> */}
          <img  src={done}/>
          <p id="confirmation-modal-description" sx={{ mt: 2 }}>
            Your Payment done successfully!
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseConfirmationModal}
            sx={{ marginTop: '20px' }}
          >
             Done
          </Button>
          
        
        </Box>
      </Modal>
    </div>

            </>
    
 
  );
};

export default PaymentPage;
