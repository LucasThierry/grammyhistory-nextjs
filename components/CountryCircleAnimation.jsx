'use client'

import React, { useState, useEffect } from 'react';
import '../app/globals.css'; // Import your CSS file for styling

const CountryCircleAnimation = () => {
    const initialSizes = Array(10).fill(20); // Initial sizes for 10 circles
    const finalSizes = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140]; // Specific final sizes for each circle
    const [circleSizes, setCircleSizes] = useState(initialSizes);

    // Function to animate the circles
    const animateCircles = () => {
        setCircleSizes(finalSizes);

        // Reset sizes to initial state after animation completes
        setTimeout(() => {
            setCircleSizes(initialSizes);
        }, 1000); // Adjust the delay as needed
    };

    useEffect(() => {
        // Trigger animation when component mounts
        animateCircles();

        // Loop animation
        const intervalId = setInterval(animateCircles, 2000); // Adjust the interval as needed

        // Clear interval on component unmount to avoid memory leaks
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container">
            {circleSizes.map((size, index) => (
                <div
                    key={index}
                    className="circle"
                    style={{ width: size, height: size }}
                ></div>
            ))}
        </div>
    );
};

export default CountryCircleAnimation;
