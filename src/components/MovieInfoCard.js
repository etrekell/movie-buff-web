import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material';

export const MovieInfoCard = ({ title, overview, poster_path }) => {
  return (
    <Box width='500px'>
      <Card>
        <CardMedia component='img' image={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title} poster`} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {overview}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
