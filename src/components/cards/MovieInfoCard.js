import React from 'react';
import { Card, CardContent, Typography, CardMedia, Stack } from '@mui/material';
import noPosterAvail from '../../images/no-poster-avail.png';
import { Link } from 'react-router-dom';

export const MovieInfoCard = ({ title, overview, posterPath, id, releaseDate }) => {
  const poster = posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : noPosterAvail;
  const posterAlt = posterPath ? `${title} poster` : 'No poster available';
  const releaseYear = releaseDate ? releaseDate.slice(0, 4) : null;

  return (
    <Link to={`/movie/${id}`} key={id} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          width: '600px',
        }}>
        <CardMedia component='img' image={poster} alt={posterAlt} sx={{ width: '300px', height: '100%' }} />
        <CardContent>
          <Stack direction={'column'} spacing={1}>
            <Typography variant='h4' component='div'>
              {title}
            </Typography>
            <Typography variant='h6' component='div'>
              {releaseYear}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {overview}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};
