import { Divider, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import ProgressCircular from './ProgressCircular';

export default function SingleSkillCard({ topic, value, isVisible }) {
  return (
    <Box sx={{ width: '200px', padding: 2 }}>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 1 }}>
          {topic}
        </Typography>
        <Divider />
        <ProgressCircular value={value} isVisible={isVisible} />
      </Box>
    </Box>
  );
}
