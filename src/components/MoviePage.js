import React, { useEffect } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { FullPageLoadingSpinner, SomethingsWrongError } from './lib';
import { useParams } from 'react-router-dom';
import { useAsync } from '../utilities/hooks/useAsync';
import { customFetch } from '../utilities/customFetch';
import noPosterAvail from '../images/no-poster-avail.png';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';

const movieInfoPlaceHolder = {
  title: 'Loading...',
  releaseDateString: 'Loading...',
  tagLine: 'Loading...',
  overview: 'Loading...',
};

export const MoviePage = () => {
  const { run, data, error, isLoading, isSuccess, isIdle } = useAsync();
  // This allows us to pull the query params from the url out into variables
  const { movieId } = useParams();

  useEffect(() => {
    const tmdbMoviePath = `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
    run(customFetch(tmdbMoviePath));
  }, [run, movieId]);

  // TODO: Make the function to convert the release date to how I want it and fall back to 'Loading...'
  const releaseDateString = '';
  const poster = data?.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : noPosterAvail;
  const { title, tagline: tagLine, overview } = data ?? movieInfoPlaceHolder;

  const moviePageStyle = {
    position: 'absolute',
    left: '25%',
    width: '50%',
    height: '85vh',
  };

  const getStatusBasedComponent = () => {
    if (isLoading || isIdle) {
      return <FullPageLoadingSpinner />;
    }

    if (isSuccess) {
      return (
        <>
          <Box sx={moviePageStyle}>
            <Grid container p={2} spacing={2}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item sm={4} xs={12}>
                    <Box component='img' alt={`${title} poster`} src={poster} width='100%' />
                    <Typography variant='subtitle1' sx={{ textAlign: 'center', fontSize: '1em', fontStyle: 'italic' }}>
                      {`"${tagLine}"`}
                    </Typography>
                  </Grid>
                  <Grid item sm={8} xs={12}>
                    <Grid container>
                      <Grid item xs={11}>
                        <Typography variant='h3' p={2}>
                          {title}
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        {/*TODO: Figure this out for favoriting a movie. Maybe use ToggleButton? (And add tooltip)*/}
                        <IconButton>
                          <ThumbUpOffAltOutlinedIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Typography variant='h5' pl={2}>
                      RELEASE DATE STRING HERE
                    </Typography>
                    <Typography variant='h6' pl={2}>
                      DIRECTOR HERE
                    </Typography>
                    <Typography variant='subtitle2' p={2} fontSize='1em'>
                      {overview}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor='forestgreen' p={2}>
                  CAST COMPONENT HERE
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
      );
    }
    // if isError or anything else (Should never be anything else at this point but adding as a fallback)
    return <SomethingsWrongError errorMessage={error ? error.message : null} />;
  };

  return getStatusBasedComponent();
};
