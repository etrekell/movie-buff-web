import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material';
import noPosterAvail from './../images/no-poster-avail.png';

export const MovieInfoCard = ({ title, overview, poster_path }) => {
  const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noPosterAvail;
  const posterAlt = poster_path ? `${title} poster` : 'No poster available';

  return (
    <Box width='500px'>
      <Card>
        <CardMedia component='img' image={poster} alt={posterAlt} />
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
