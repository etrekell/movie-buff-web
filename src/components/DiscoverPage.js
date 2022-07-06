import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { MovieInfoCard } from './MovieInfoCard';
import { customFetch } from '../utilities/customFetch';
import { useAsync } from '../utilities/hooks/useAsync';
import { FullPageLoadingSpinner } from './lib';

export const DiscoverPage = () => {
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = useState('');
  const [queried, setQueried] = useState(false);
  // encodeURIComponent properly serializes strings to be used in a URL, For example, it replaces strings with "%20"
  const tmdbSearchPath = `${process.env.REACT_APP_TMDB_API_BASE_URL}/search/movie?api_key=${
    process.env.REACT_APP_TMDB_API_KEY
  }&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`;

  const handleSubmit = (e) => {
    // Note: Preventing default is the first thing you should do whenever handling a submit in React. If you don't do
    // this, every submission will do a full page refresh and make a POST request to the current URL with the data from the form.
    e.preventDefault();

    // exit early if there is no input
    if (!e.target.elements.search.value) {
      return;
    }

    setQueried(true);
    setQuery(e.target.elements.search.value);
  };

  useEffect(() => {
    // This prevents useEffect from running on the initial render
    if (!queried) {
      return;
    }
    run(customFetch(tmdbSearchPath));
    // Only make this call when one of these changes
  }, [queried, query, run, tmdbSearchPath]);

  return (
    <Stack spacing={2} alignItems='center'>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: '600px', margin: '25px' }}
          label='Search for a movie'
          id='search'
          variant='outlined'
          size='small'
          type='text'
          aria-label='search'
        />
      </form>

      {isLoading ? <FullPageLoadingSpinner /> : null}

      {isError ? (
        <Box>
          <Typography variant='subtitle1' color='error'>
            There was an error.
          </Typography>
          <Typography variant='subtitle2' color='error'>
            {/*This is because sometimes I get back a message and sometimes it's a status_message.*/}
            {error.message ?? error.status_message ?? 'Please try again.'}
          </Typography>
        </Box>
      ) : null}

      {isSuccess ? (
        data.results.length ? (
          <Stack spacing={4}>
            {data.results.map(({ title, overview, poster_path, id, release_date }) => (
              <MovieInfoCard
                title={title}
                overview={overview}
                posterPath={poster_path}
                releaseDate={release_date}
                id={id}
                key={id}
              />
            ))}
          </Stack>
        ) : (
          <Typography variant='subtitle1'>{`No results found for "${query}" Please try another search.`}</Typography>
        )
      ) : null}
    </Stack>
  );
};
