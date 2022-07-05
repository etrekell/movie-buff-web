import React from 'react';
import { Typography } from '@mui/material';
import { centeredStyle } from './lib';
import { useParams } from 'react-router-dom';

export const MoviePage = () => {
  // This allows us to pull the query params from the url out into variables
  const { movieId } = useParams();

  return (
    // TODO: make this look good
    <div style={centeredStyle}>
      <Typography>MOVIE PAGE PLACEHOLDER</Typography>
      <Typography>Going to change this to make it look better. Make the tmdb call with this movie id:</Typography>
      <Typography>{movieId}</Typography>
    </div>
  );
};
