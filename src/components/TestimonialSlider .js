import React, { useState } from 'react';
import "../../src/TestimonialSlider.css";
import { Avatar } from '@mui/material';

import human_1 from '../assets/Image/human_1.jpg';
import human_3 from '../assets/Image/human_3.jpg';
import human_7 from '../assets/Image/human_7.jpg';

const testimonials = [
    {
        img: human_1,
        quote: "Our data-driven approach at Prime Cars ensures that every decision is backed by insights. We continually analyze market trends and customer preferences to optimize our fleet and services, delivering a seamless rental experience to our clients.",
        name: 'Jessie',
        role: 'Business Analyst'
    },
    {
        img: human_3,
        quote: "At Prime Cars, our mission is to provide reliable and convenient transportation solutions. We pride ourselves on our commitment to excellence, innovation, and customer satisfaction, making us a trusted choice for car rentals.",
        name: 'Nick Discussa',
        role: 'Director'
    },
    {
        img: human_7,
        quote: "Our team at Prime Cars is dedicated to offering top-notch service and support. From easy booking processes to well-maintained vehicles, we strive to exceed expectations and ensure a smooth journey for all our customers.",
        name: 'Amelia Josef',
        role: 'Manager'
    },
];

const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="testimonial-slider">
            <div className="half-circle">
                <Avatar 
                    key={testimonials[activeIndex].img} 
                    src={testimonials[activeIndex].img} 
                    alt={testimonials[activeIndex].name} 
                />
            </div>
            <div className="text-content">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`testimonial ${index === activeIndex ? 'active' : ''}`}
                    >
                        <p>"{testimonial.quote}"</p>
                    </div>
                ))}
            </div>

            <div className="button-container">
                {testimonials.map((testimonial, index) => (
                    <button
                        key={index}
                        className={`outlined-button ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {testimonial.name} - {testimonial.role}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
