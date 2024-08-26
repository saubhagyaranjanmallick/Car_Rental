import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HostNavbar from '../../components/HostNavbar'; // Adjust the import path if needed
import { Accordion, AccordionSummary, AccordionDetails, Card, CardContent, Grid, Box, Avatar, Stack, TextField, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupeeIcon';
import PaymentIcon from '@mui/icons-material/Payment';
import EventIcon from '@mui/icons-material/Event';
import TimerIcon from '@mui/icons-material/Timer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Transactions = () => {
  const location = useLocation();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulate fetching last 5 transactions data
    const fetchTransactions = async () => {
      // Example data, replace with API call
      const data = [
        {
          id: 1,
          name: 'John Doe',
          address: '123 Main St, Cityville',
          amount: '$150',
          paymentStatus: 'Paid',
          reserveDate: '2024-08-10',
          reserveTime: '10:00 AM',
          bookingHours: 4,
          carName: 'Toyota Prius',
        },
        {
          id: 2,
          name: 'Jane Smith',
          address: '456 Elm St, Townsville',
          amount: '$200',
          paymentStatus: 'Pending',
          reserveDate: '2024-08-09',
          reserveTime: '2:00 PM',
          bookingHours: 6,
          carName: 'Honda Civic',
        },
        // Add more transactions as needed
      ];

      setTransactions(data);
    };

    fetchTransactions();
  }, [location]);

  return (
    <div>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', width: '100dvw' }}>
        <HostNavbar />
        <Box p={2}>
         <Card sx={{m:2}}> 
          <p style={{fontSize:"20px" , fontWeight:600 , paddingLeft:"10px" , color:"#00695C"}}>
           Booking Details
          </p>
          <Grid container spacing={3} sx={{p:2}}>
            <Grid item lg ={3}>
            <TextField label="Customer Name" fullWidth></TextField>
            </Grid>
            <Grid item lg ={3}>
              <TextField label="From Date" fullWidth></TextField>
            </Grid>  
            <Grid item lg ={3}>
              <TextField label="To Date" fullWidth></TextField>
            </Grid>
            <Grid item lg ={2}>
              <Button className="enquire-button" variant='contained'  sx={{m:1 , textTransform:"capitalize" , float:"right" , backgroundColor:"#00695C"}}>View Results </Button>
            </Grid>
            <Grid item lg ={1}>
            </Grid>
          </Grid>
          <br/>
</Card>

          <Grid container spacing={2}>
            {transactions.map((transaction) => (
              <Grid item xs={12} key={transaction.id}>
                  <CardContent>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar />
                          <p style={{marginTop:"5px" , color:"#009688" , fontWeight:500}}>
                            {transaction.name} - {transaction.carName}
                          </p>
                        </Stack>
                      </AccordionSummary>
                      <AccordionDetails>
                       <Grid container spacing={2} alignItems="center">
                        <Grid item lg={4}>
                        <Box
                            sx={{
                              height: '100px',
                              width: '150px',
                              backgroundColor: '#EEEEEE',
                              borderRadius: '10px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            {/* Content can be added here if needed */}
                          </Box>
                        </Grid>
                        <Grid item lg={4}>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: '10px' }}>
                          <LocationOnIcon color="success" />
                          <p variant="body1">
                            Address: {transaction.address}
                          </p>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: '10px' }}>
                          <CurrencyRupeeIcon color="action" />
                          <p variant="body1">
                            Amount: {transaction.amount}
                          </p>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: '10px' }}>
                          <PaymentIcon color="error" />
                          <p variant="body1">
                            Payment Status: {transaction.paymentStatus}
                          </p>
                        </Stack>
                        </Grid>
                        <Grid item lg={4}>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: '10px' }}>
                          <EventIcon color="info" />
                          <p variant="body1">
                            Reserved on: {transaction.reserveDate} at {transaction.reserveTime}
                          </p>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: '10px' }}>
                          <TimerIcon color="action" />
                          <p variant="body1">
                            Booking Hours: {transaction.bookingHours} hours
                          </p>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <DirectionsCarIcon color="warning" />
                          <p variant="body1">
                            Car Model: {transaction.carName}
                          </p>
                        </Stack>
                        </Grid>
                       </Grid>
                       
                        
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Transactions;
