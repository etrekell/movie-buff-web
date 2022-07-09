import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import noHeadshotAvail from '../../images/no-headshot-avail.png';

export const ActorCard = ({ actor }) => {
  const { name, character, profile_path: profilePath } = actor ?? null;
  const headShot = profilePath ? `https://image.tmdb.org/t/p/w300${profilePath}` : noHeadshotAvail;

  return actor ? (
    <Box width='150px'>
      <Card>
        <CardMedia
          component='img'
          image={headShot ?? noHeadshotAvail}
          alt={`${name ?? 'actor'} headshot`}
          width='100%'
        />
        <CardContent>
          <Typography variant='body1' color='text.primary'>
            {name ?? ''}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {character ?? ''}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  ) : (
    <></>
  );
};
