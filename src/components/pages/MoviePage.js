import React, { useEffect } from 'react';
import { Box, Grid, IconButton, Typography, Paper } from '@mui/material';
import { FullPageLoadingSpinner, SomethingsWrongError } from '../lib';
import { useParams } from 'react-router-dom';
import { useAsync } from '../../utilities/hooks/useAsync';
import { customFetch } from '../../utilities/customFetch';
import noPosterAvail from '../../images/no-poster-avail.png';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import { getMovieStatusVerbiage } from '../../utilities/movieStatusUtil';
import { MovieCast } from '../MovieCast';
import { ReviewSection } from '../ReviewSection';

const movieInfoPlaceHolder = {
  title: '',
  tagLine: '',
  overview: '',
};

export const MoviePage = ({ user }) => {
  const { run, data, error, isLoading, isSuccess, isIdle } = useAsync();
  // This allows us to pull the query params from the url out into variables
  const { movieId } = useParams();
  const tmdbMoviePath = `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  useEffect(() => {
    run(customFetch(tmdbMoviePath));
  }, [run, tmdbMoviePath]);

  const movieStatusVerbiage = data ? getMovieStatusVerbiage(data) : '';
  const poster = data?.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : noPosterAvail;
  const { title, tagline: tagLine, overview } = data ?? movieInfoPlaceHolder;

  const moviePageStyle = {
    position: 'absolute',
    left: '20%',
    width: '60%',
    height: '85vh',
  };

  const getStatusBasedComponent = () => {
    if (isLoading || isIdle) {
      return <FullPageLoadingSpinner />;
    }

    if (isSuccess) {
      return (
        <Box sx={moviePageStyle} paddingTop={4}>
          <Paper elevation={2}>
            <Grid container p={2} spacing={2}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item sm={4} xs={12}>
                    <Box component='img' alt={`${title} poster`} src={poster} width='100%' />
                    <Typography variant='subtitle1' sx={{ textAlign: 'center', fontSize: '1em', fontStyle: 'italic' }}>
                      {tagLine ? `"${tagLine}"` : ''}
                    </Typography>
                  </Grid>
                  <Grid item sm={8} xs={12}>
                    <Grid container>
                      <Grid item xs={11}>
                        <Typography variant='h3' pl={2}>
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
                    <Typography variant='h6' pl={2}>
                      {movieStatusVerbiage ?? ''}
                    </Typography>
                    <Typography variant='subtitle2' p={2} fontSize='1em'>
                      {overview}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <MovieCast movieId={movieId} />
              </Grid>
              <Grid item xs={12}>
                <ReviewSection movieId={movieId} user={user} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      );
    }
    // if isError or anything else (Should never be anything else at this point but adding as a fallback)
    return <SomethingsWrongError errorMessage={error ? error.message : null} />;
  };

  return getStatusBasedComponent();
};
