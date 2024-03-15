'use client'

import React, { useState, useEffect, useRef } from 'react';
import '../app/globals.css'; // Import your CSS file for styling

const CountryCircleAnimation = () => {
    const [circleSizes, setCircleSizes] = useState(Array(10).fill(20)); // Initial sizes for 10 circles
    const containerRef = useRef(null);

    // Function to animate the circles
    const animateCircles = () => {
        const finalSizeConst = 10
        const finalSizes = [1*finalSizeConst, 1*finalSizeConst, 2*finalSizeConst, 1*finalSizeConst, 6*finalSizeConst, 108*finalSizeConst, 18*finalSizeConst, 1*finalSizeConst, 1*finalSizeConst, 1*finalSizeConst]; // Specific final sizes for each circle
        const animationDuration = 5000; // Total duration of animation in milliseconds (10 times slower than before)
        const steps = 50; // Number of steps for the animation
        const stepDuration = animationDuration / steps; // Duration of each step

        // Calculate the increment for each step
        const sizeIncrements = finalSizes.map((finalSize, index) => {
            const initialSize = circleSizes[index];
            return (finalSize - initialSize) / steps;
        });

        // Execute each step with a delay
        let currentSizes = [...circleSizes];
        for (let i = 0; i < steps; i++) {
            setTimeout(() => {
                currentSizes = currentSizes.map((size, index) => size + sizeIncrements[index]);
                setCircleSizes(currentSizes);
            }, i * stepDuration);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCircles();
                    observer.unobserve(entry.target);
                }
            });
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="container">
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
