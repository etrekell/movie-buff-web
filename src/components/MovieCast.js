import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useAsync } from '../utilities/hooks/useAsync';
import { customFetch } from '../utilities/customFetch';
import { ActorAvatar } from './ActorAvatar';

export const MovieCast = ({ movieId }) => {
  const { run, data, isSuccess } = useAsync();
  const tmdbCreditsPath = `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  useEffect(() => {
    run(customFetch(tmdbCreditsPath));
  }, [run, tmdbCreditsPath]);

  const mainCast = data?.cast.slice(0, 10) ?? null;

  return isSuccess && mainCast ? (
    <>
      <Typography paddingBottom={2} variant='h5'>
        Staring:
      </Typography>
      <Grid container justifyContent='space-evenly'>
        {mainCast.map((actor) => (
          <Box padding={1} key={actor.id}>
            <ActorAvatar actor={actor} />
          </Box>
        ))}
      </Grid>
    </>
  ) : (
    <></>
  );
};
