import React, { useEffect, useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { MovieInfoCard } from './MovieInfoCard';

export const DiscoverPage = () => {
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [queried, setQueried] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    // Note: Preventing default is the first thing you should do whenever handling a submit in Reac. If you don't do
    // this, every submission will do a full page refresh and make a POST request to the current URL with the data from the form.
    e.preventDefault();
    setQueried(true);
    setQuery(e.target.elements.search.value);
  };

  useEffect(() => {
    // This prevents useEffect from running on the initial render
    if (!queried) {
      return;
    }
    setStatus('loading');
    fetch(
      // This is the proper way to store api keys, they are in the .env file which is listed in the gitignore so
      // that it is not tracked.
      // encodeURIComponent properly serializes strings to be used in a URL, For example, it replaces strings with "%20"
      `${process.env.REACT_APP_TMDB_API_BASE_URL}/search/movie?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
    )
      // once the promise from the initial call resolves, we get the json out of that response object
      .then((response) => response.json())
      // once the response.json promise resolves, we take out out the response data...
      .then((responseData) => {
        // and store it in state
        setData(responseData);
        setStatus('success');
      });
    // Only make this call when one of these changes
  }, [queried, query]);

  return (
    <Stack spacing={2} alignItems='center'>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: '500px', margin: '25px' }}
          label='Search for a movie'
          id='search'
          variant='outlined'
          size='small'
          type='text'
          aria-label='search'
        />
      </form>

      {status === 'success' ? (
        data.results.length ? (
          <Stack spacing={4}>
            {data.results.map((movie) => (
              <MovieInfoCard
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
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
