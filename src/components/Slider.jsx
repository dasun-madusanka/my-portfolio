import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderComponent({ value, isVisible }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const interval = setInterval(() => {
        if (start >= value) {
          clearInterval(interval);
        } else {
          start += 1;
          setAnimatedValue(start);
        }
      }, 20); // Adjust speed of the animation
    } else {
      setAnimatedValue(0); // Reset the value when not visible
    }
  }, [value, isVisible]);

  return (
    <Box sx={{ width: "100%" }}>
      <Slider value={animatedValue} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}
