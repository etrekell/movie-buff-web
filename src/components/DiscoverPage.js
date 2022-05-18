import React, { useEffect, useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { MovieInfoCard } from './MovieInfoCard';

export const DiscoverPage = () => {
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [queried, setQueried] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueried(true);
    setQuery(e.target.elements.search.value);
  };

  useEffect(() => {
    if (!queried) {
      return;
    }
    setStatus('loading');
    fetch(
      `${process.env.REACT_APP_TMDB_API_BASE_URL}/search/movie?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setStatus('success');
      });
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
