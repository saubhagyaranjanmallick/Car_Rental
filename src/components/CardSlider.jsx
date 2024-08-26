import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos,FormatQuote } from '@mui/icons-material';
import human_4 from '../assets/Image/human_4.jpg';
import human_8 from '../assets/Image/human_8.jpg';
import human_9 from '../assets/Image/human_9.jpg';

// Sample card data
const cardData = [
  {
    image: human_8,
    name: 'Ashok Kumar',
    location: 'Mumbai',
    message: 'Flexibel Price Control depending on situations.',
  },
  {
    image: human_9,
    name: 'Ravi Patel',
    location: 'Delhi',
    message: 'In time payments with attractive coupons for users.',
  },
  {
    image: human_4,
    name: 'Sital Sharma',
    location: 'Bangalore',
    message: 'Easy to use its app and also in websites.',
  },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous card
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  // Function to go to the next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const { image, name, location, message } = cardData[currentIndex];

  return (
    <Box display="flex" alignItems="center" justifyContent="center" position="relative">
      <IconButton onClick={handlePrevious} sx={{ position: 'absolute', left: 0 }}>
        <ArrowBackIos />
      </IconButton>

      <Card sx={{ width: 345, height: 280 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 150, objectFit: 'cover' }} // Fixed height and fit
            image={image}
            alt={name}
          />
          <CardContent sx={{ height: 120, overflow: 'hidden' }}> {/* Fixed height */}
            <Typography variant="h6" gutterBottom noWrap>
              {name} <span style={{ fontSize: '18px', color: '#1B5E20' }}>({location})</span>
            </Typography>
            <FormatQuote color='succcess'/>
            <Typography variant="subtitle2" color="text.secondary" textAlign="center" sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              "{message}"
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0 }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default CardSlider;
