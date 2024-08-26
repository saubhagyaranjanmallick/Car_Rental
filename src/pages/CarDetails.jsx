import React from 'react'
import Navbar from '../components/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box ,Grid, TextField, Tabs, Button, Card, Divider, Stack, Tab, Typography, CardContent, Avatar } from '@mui/material';
import { AccountCircle,PercentRounded } from '@mui/icons-material';
import PropTypes from 'prop-types';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CameraRearIcon from '@mui/icons-material/CameraRear';
import UsbIcon from '@mui/icons-material/Usb';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfinityIcon from '@mui/icons-material/AllInclusive';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const features = [
  { label: 'Voice Control', icon: <SettingsRemoteIcon /> },
  { label: 'Traction Control', icon: <SecurityIcon /> },
  { label: 'Anti-lock Braking System (ABS)', icon: <CarRepairIcon /> },
  { label: 'Electric ORVM', icon: <DirectionsCarIcon /> },
  { label: 'USB Charger', icon: <UsbIcon /> },
  { label: 'Child Seat', icon: <ChildFriendlyIcon /> },
  { label: 'Reverse Camera', icon: <CameraRearIcon /> },
  { label: 'Bluetooth', icon: <BluetoothIcon /> },
  { label: 'Toolkit', icon: <BuildIcon /> },
];

const benifits = [
  {
    title: 'Unlimited KMs',
    description: 'Endless kilometres with no extra charge',
    icon: <InfinityIcon />,
  },
  {
    title: 'Zero Deposit',
    description: 'No security deposits or fees',
    icon: <CurrencyRupeeIcon />,
  },
  // Add more features as needed
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const CarDetails = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to access the current location
  const { car } = location.state; // Extract car data from state
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <> 
        
      <Box sx={{backgroundColor:"#121212" , width:"100dvw"}}>
      <Navbar  />
      </Box>  

      <br/>
            <Grid container justifyContent="center" spacing={2} >
              <Grid item lg={1}></Grid>
              <Grid item lg={2}>
              <TextField label="Location" variant="standard" defaultValue="Kolkata" style={{height:"20px"}} fullWidth/> 

              </Grid>
              <Grid item lg={2}>
                <TextField variant="standard"  label="Check in" fullWidth defaultValue="12 AUG 2024"/> 
              </Grid>
              <Grid item lg={2}>
              <TextField label="Check Out" variant="standard"  defaultValue="13 AUG 2024" fullWidth/> 
              </Grid>
              <Grid item lg={4}>
               <Button variant="outlined" color='success' sx={{mt:1 , fontWeight:"bold" , float:"right"}}>Update Search</Button>
              </Grid>
              <Grid item lg={1}></Grid>
            </Grid>
            <br/>

              
            <div>
            {/* <p style={{paddingLeft:"10px" , color:"#00695C" , paddingLeft:"20px"}}><ArrowBack fontSize='small'/> Back</p> */}

              <Grid container justifyContent="center" spacing={2} sx={{m:2}}>
              
              <Grid item lg={7}>
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={car.image} alt="Car" style={{ width: '50%' }} />
                    <br/>
      
                </Card>
                
                <p style={{fontSize:"24px",fontWeight:500}}>Hyundai Verna 2022 <span style={{ float:"right" , fontSize:"16px" , color:"green"}}> Ratings: {(car.rating)}*</span>
                <Stack direction="row" spacing={1}>
                  <p style={{fontSize:"14px"}}> {car.transmission} </p><FiberManualRecordIcon fontSize='small'/>
                  <p style={{fontSize:"14px"}}>{car.fuel} </p><FiberManualRecordIcon fontSize='small'/>
                  <p style={{fontSize:"14px"}}>5 Seats</p>
                </Stack>
                  </p>

              <Stack direction="row" spacing={1}>
               <AccountCircle color='success'/>
              <p style={{fontWeight:500 ,fontSize:14 , color:"darkgreen"}}> Hosted by Soumendra Jena </p>

              </Stack>
                {/* <p style={{fontWeight:"bold" , color:"green" , fontSize:"30px"}}>5.0 </p> */}
              </Grid>
              <Grid item lg={1}></Grid>

              <Grid item lg={3}>
              <p style={{fontWeight:500 , fontSize:"20px"}}>Exclusive Offers</p>
              <Card sx={{height:"50px",p:1}}>
                Explore Offers
              <p style={{fontSize:"12px"}}>   Check Available Offers</p>
               <PercentRounded/>
              </Card>
              <p style={{fontSize:"12px"}}>Trip Protection Package (Secure Fee) :<span style={{fontWeight:"bold" , color:"blue" , float:"right"}}>₹209</span> 
               
                </p>
                <Divider/>
                <p style={{fontSize:"20px" , fontWeight:500}}> Total Price   <span style={{fontSize:"12px"}}>( Inclusive of taxes)</span> <span style={{ float:"right"}}>₹1,240</span></p>
              <br/>
                <Button size='medium' color='success' variant='contained' fullWidth onClick={()=>{navigate('/payment')}}>Proceed To Book</Button>
                             
              </Grid>
              <Grid item lg={1}></Grid>
            </Grid>

      <Box sx={{ width: '100%',m:1 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  textColor="primary"
        indicatorColor="primary">
          <Tab label="Reviews " {...a11yProps(0)} />
          <Tab label="Location " {...a11yProps(1)} />
          <Tab label="Features" {...a11yProps(2)} />
          <Tab label="Benifits" {...a11yProps(3)} />
          <Tab label="Cancellation" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <p style={{fontWeight:"500", fontSize:"22px"}}>Ratings & Reviews</p> 
          <Typography variant='h5' color="success" >4.22 <span style={{fontSize:"14px" , color:"#6E6E6E"}}>Based on 44 Trips ⭐⭐⭐⭐</span></Typography>

          <Divider/>
       <p> Reviews (6)</p>
     <Grid container justifyContent="left" spacing={2}>
       <Grid item lg={4}>
       <Stack direction="row" spacing={2}>
       <AccountCircle color='success'/> 
       <p style={{fontSize:"16px" , fontWeight:500 , color:"#121212"}}>  Anurag Gautam</p>&nbsp;
       5.0⭐
       </Stack>
      
        <p style={{fontSize:"12px"}}>Jul 19th, 2024</p>
        <p  style={{fontSize:"14px" , color:"#6E6E6E"}}>The host is very polite humble and cooperative.</p>
        </Grid>
        </Grid>




      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <p style={{fontWeight:"500", fontSize:"18px"}}>Car Location</p> 
          
       <p>83/3,C - 13, Sahyadri Farms, Lalit Estate, Baner, S Vihar, Bhubaneswar 411045, India</p>
       <p style={{fontSize:"14px" , fontWeight:"500"}}>↖️8.4 Kms Away</p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <p style={{fontWeight:"500", fontSize:"18px"}}>Features</p>
       <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Box display="flex" alignItems="center">
              {feature.icon}
              <p variant="subtitle1" style={{ marginLeft: "5px",fontSize:"14px" }}>
                {feature.label}
              </p>
            </Box>
          </Grid>
        ))}
      </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <p style={{fontWeight:"500", fontSize:"18px"}}>Enjoy these additional benefits</p>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {benifits.map((feature, index) => (
          <Grid item xs={12} sm={6} lg={6} key={index}>
            <Box
              sx={{
                border: '1px solid #6E6E6E',
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: '#00695C', marginRight: 2 }}>
                    {feature.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{feature.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <p style={{fontWeight:"500", fontSize:"18px"}}>Cancellation Policies</p>

      <Box
              sx={{
                border: '1px solid #6E6E6E',
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: '#00695C', marginRight: 2 }}>
                <InfinityIcon/>

                  </Avatar>
                  <Box>
                    <Typography variant="h6">
                    Cancellation Unavailable</Typography>
                    <Typography variant="body2" color="textSecondary">
                    This booking is non-refundable
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
      </CustomTabPanel>
    </Box>
  </div>
      </>
  )
}

export default CarDetails