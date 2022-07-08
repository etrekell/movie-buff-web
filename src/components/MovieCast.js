import React from 'react';
import { Box, Typography } from '@mui/material';

export const MovieCast = ({ movieId }) => {
  return (
    <Box bgcolor='forestgreen' p={2}>
      <Typography variant='h5'>CAST COMPONENT HERE for movie id => {movieId}</Typography>
    </Box>
  );
};
