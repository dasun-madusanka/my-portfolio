import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: 2 }}>
      <CircularProgress size={150} color='primary' variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" component="div" sx={{ color: 'text.secondary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function ProgressCircular({ value, isVisible }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const interval = setInterval(() => {
        if (start >= value) {
          clearInterval(interval);
        } else {
          start += 1;
          setProgress(start);
        }
      }, 20); // Adjust speed of the progress increase
    } else {
      setProgress(0); // Reset progress to 0 when not visible
    }
  }, [value, isVisible]);

  return <CircularProgressWithLabel value={progress} />;
}
