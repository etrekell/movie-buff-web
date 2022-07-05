import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar as MuiAppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { MovieBuffLogo } from './MovieBuffLogo';

export const AppBar = ({ user, logout }) => {
  const navigate = useNavigate();

  // TODO: Do something better here (Like the dropdown to either login or logout)
  const displayName = user ? user.displayName : '????';

  return (
    <MuiAppBar position='static'>
      <Toolbar variant='dense'>
        <IconButton size='small' edge='start' aria-label='logo'>
          <MovieBuffLogo width='25' height='25' />
        </IconButton>
        <Typography color='inherit' variant='h6' component='div' sx={{ flexGrow: 1, paddingLeft: '10px' }}>
          Movie Buff
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' onClick={() => navigate('/discover')}>
            Discover
          </Button>
          <Button color='inherit'>User: {displayName}</Button>
          <Button onClick={logout} color='inherit'>
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
};
