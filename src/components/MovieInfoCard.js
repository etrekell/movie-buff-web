import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material';
import noPosterAvail from './../images/no-poster-avail.png';
import { Link } from 'react-router-dom';

export const MovieInfoCard = ({ title, overview, poster_path, id }) => {
  const poster = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noPosterAvail;
  const posterAlt = poster_path ? `${title} poster` : 'No poster available';

  return (
    <Box width='300px'>
      <Link to={`/movie/${id}`} key={id} style={{ textDecoration: 'none' }}>
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
      </Link>
    </Box>
  );
};
