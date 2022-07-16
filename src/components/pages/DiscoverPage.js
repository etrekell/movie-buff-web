import React, { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material';
import { MovieInfoCard } from '../cards/MovieInfoCard';
import { customFetch } from '../../utilities/customFetch';
import { useAsync } from '../../utilities/hooks/useAsync';
import { FullPageLoadingSpinner } from '../lib';

const getBrowsePath = (browseBy) => {
  switch (browseBy) {
    case 'trending':
      return `${process.env.REACT_APP_TMDB_API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
    case 'popular':
      return `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
    case 'nowPlaying':
      return `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
    case 'upcoming':
      return `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
    case 'topRated':
      return `${process.env.REACT_APP_TMDB_API_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
    default:
      return `${process.env.REACT_APP_TMDB_API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  }
};

export const DiscoverPage = () => {
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = useState('');
  const [queried, setQueried] = useState(false);
  const [browseBy, setBrowseBy] = useState('trending');
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
    if (queried) {
      run(customFetch(tmdbSearchPath));
      setBrowseBy('');
      return;
    }
    run(customFetch(getBrowsePath(browseBy)));
    // Only make this call when one of these changes
  }, [queried, query, run, tmdbSearchPath, browseBy]);

  return (
    <Stack spacing={2} alignItems='center'>
      <Box sx={{ paddingTop: '20px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: '600px' }}
            label='Search for a movie'
            id='search'
            variant='outlined'
            size='small'
            type='text'
            aria-label='search'
          />
        </form>
      </Box>
      <ButtonGroup variant='text' aria-label='browse button group'>
        <Button onClick={() => setBrowseBy('trending')} disabled={browseBy === 'trending'}>
          Trending
        </Button>
        <Button onClick={() => setBrowseBy('popular')} disabled={browseBy === 'popular'}>
          Popular
        </Button>
        <Button onClick={() => setBrowseBy('nowPlaying')} disabled={browseBy === 'nowPlaying'}>
          Now Playing
        </Button>
        <Button onClick={() => setBrowseBy('upcoming')} disabled={browseBy === 'upcoming'}>
          Upcoming
        </Button>
        <Button onClick={() => setBrowseBy('topRated')} disabled={browseBy === 'topRated'}>
          Top Rated
        </Button>
      </ButtonGroup>
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
                movieTitle={title}
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
