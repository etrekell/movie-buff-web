import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { centeredStyle, FullPageLoadingSpinner, SomethingsWrongError } from './lib';
import { useParams } from 'react-router-dom';
import { useAsync } from '../utilities/hooks/useAsync';
import { customFetch } from '../utilities/customFetch';

export const MoviePage = () => {
  const { run, data, error, isLoading, isSuccess, isIdle } = useAsync();
  // This allows us to pull the query params from the url out into variables
  const { movieId } = useParams();

  useEffect(() => {
    const tmdbMoviePath = `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
    run(customFetch(tmdbMoviePath));
  }, [run, movieId]);

  const getStatusBasedComponent = () => {
    if (isLoading || isIdle) {
      return <FullPageLoadingSpinner />;
    }

    if (isSuccess) {
      return (
        <div style={centeredStyle}>
          {data?.original_title ? <Typography>Title: {data.original_title}</Typography> : null}
        </div>
      );
    }
    // if isError or anything else (Should never be anything else at this point but adding as a fallback)
    return <SomethingsWrongError errorMessage={error ? error.message : null} />;
  };

  return getStatusBasedComponent();
};
