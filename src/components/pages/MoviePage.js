import React, { useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { FullPageLoadingSpinner, SomethingsWrongError } from '../lib';
import { useParams } from 'react-router-dom';
import { useAsync } from '../../utilities/hooks/useAsync';
import { customFetch } from '../../utilities/customFetch';
import noPosterAvail from '../../images/no-poster-avail.png';
import { getMovieStatusVerbiage } from '../../utilities/movieStatusUtil';
import { MovieCast } from '../MovieCast';
import { ReviewSection } from '../ReviewSection';
import { MovieActionButtonGroup } from '../MovieActionButtonGroup';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const MoviePage = ({ user }) => {
  // TODO: Listen for firestore updates and automatically refresh them (Look at firebase docs, theres a way to do this)
  // This allows us to pull the query params from the url out into variables
  const { movieId } = useParams();
  const movieInfoPlaceHolder = {
    title: 'Title Unknown',
    tagLine: '',
    overview: '',
    status: '',
    release_date: '',
    id: movieId,
  };
  const { run, data: movieInfo, error, isLoading, isSuccess, isIdle } = useAsync(movieInfoPlaceHolder);
  const tmdbMoviePath = `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  const movieReviewQuery = query(collection(db, 'movie-reviews'), where('movieId', '==', movieId));
  const currentUserIsAuthor = (authorUid) => authorUid === user.uid;

  const getSortedReviews = (reviewData) =>
    reviewData.docs
      // pulls out review object and adds currentUserIsAuthor and id properties
      .map((doc) => ({ ...doc.data(), currentUserIsAuthor: currentUserIsAuthor(doc.data().authorUid), id: doc.id }))
      // Puts current users reviews at the top
      .sort((r) => (r.currentUserIsAuthor ? -1 : 1));

  const getMovieInfo = () => {
    return new Promise((resolve, reject) => {
      customFetch(tmdbMoviePath)
        .then((info) => {
          getDocs(movieReviewQuery).then((reviewData) => {
            const reviews = getSortedReviews(reviewData);
            // Combines the data from tmdb and the reviews from firestore
            resolve({ ...info, reviews, id: info.id.toString() });
          });
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  };

  useEffect(() => {
    run(getMovieInfo());
  }, [run]);

  const movieStatusVerbiage = getMovieStatusVerbiage(movieInfo);
  const { title: movieTitle, tagline: tagLine, overview, poster_path: posterPath } = movieInfo;
  const poster = posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : noPosterAvail;

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
                    <Box component='img' alt={`${movieTitle} poster`} src={poster} width='100%' />
                    <Typography variant='subtitle1' sx={{ textAlign: 'center', fontSize: '1em', fontStyle: 'italic' }}>
                      {tagLine ? `"${tagLine}"` : ''}
                    </Typography>
                  </Grid>
                  <Grid item sm={8}>
                    <Grid container>
                      <Grid item xs={9}>
                        <Typography variant='h3' pl={1.5}>
                          {movieTitle}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'end',
                        }}
                      >
                        <MovieActionButtonGroup userUid={user.uid} movieInfo={movieInfo} />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='h6' pl={2} pt={1}>
                        {movieStatusVerbiage ?? ''}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='subtitle2' p={2} fontSize='1em'>
                        {overview}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <MovieCast movieId={movieInfo.id} />
              </Grid>
              <Grid item xs={12}>
                <ReviewSection user={user} movieInfo={movieInfo} movieTitle={movieTitle} />
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
