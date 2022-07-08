import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useAsync } from '../utilities/hooks/useAsync';
import { customFetch } from '../utilities/customFetch';
import { ActorCard } from './ActorCard';

export const MovieCast = ({ movieId }) => {
  const { run, data, isSuccess } = useAsync();
  const tmdbCreditsPath = `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  useEffect(() => {
    run(customFetch(tmdbCreditsPath));
  }, [run]);

  const mainCast = data?.cast.slice(0, 10) ?? null;

  return isSuccess && mainCast ? (
    <Box>
      <Typography variant='h5'>Staring:</Typography>
      {mainCast.map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </Box>
  ) : (
    <></>
  );
};
