import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box ,Grid, TextField, FormControl, Tabs, Button, Card, Divider, Stack, Tab, Typography } from '@mui/material';
import { AccountCircle, ArrowBack, CircleOutlined, CircleRounded, PercentRounded, StairsRounded } from '@mui/icons-material';
import PropTypes from 'prop-types';
import car_img1 from '../assets/Image/car_img1.jpg';
import car_img2 from '../assets/Image/car_img2.jpg';
import car_img3 from '../assets/Image/car_img3.jpg';
import car_img4 from '../assets/Image/car_img4.jpg';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


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
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  textColor="secondary"
        indicatorColor="secondary">
          <Tab label="Reviews " {...a11yProps(0)} />
          <Tab label="Location " {...a11yProps(1)} />
          <Tab label="Features" {...a11yProps(2)} />
          <Tab label="Benifits" {...a11yProps(3)} />
          <Tab label="Cancellation" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Five
      </CustomTabPanel>
    </Box>
  </div>
      </>
  )
}

export default CarDetails