import React from 'react';
import { AppBar as MuiAppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { MovieBuffLogo } from './MovieBuffLogo';
import { NavButton } from './lib';
import { theme } from '../app/MuiAppTheme';
import { useNavigate } from 'react-router-dom';

export const AppBar = ({ user, logout }) => {
  const navigate = useNavigate();

  // TODO: Do something better here (Like the dropdown to either login or logout)
  const displayName = user ? user.displayName : '????';
  return (
    <MuiAppBar position='static' sx={{ background: theme.palette.primary.dark }}>
      <Toolbar variant='dense'>
        <IconButton size='small' edge='start' aria-label='logo' onClick={() => navigate('/discover')}>
          <MovieBuffLogo width='25' height='25' />
        </IconButton>
        <Typography sx={{ paddingLeft: '10px' }} color='inherit' variant='h6' component='span'>
          Movie Buff
        </Typography>
        <Box sx={{ flexGrow: 1, paddingLeft: '50px' }}>
          <Stack direction='row' spacing={2}>
            <NavButton path='/discover'>discover</NavButton>
            <NavButton path='/fake'>Fake</NavButton>
          </Stack>
        </Box>
        <Stack direction='row' spacing={2}>
          {/* TODO: Do something better here (Like the dropdown to either login or logout)*/}
          <Button color='inherit'>User: {displayName}</Button>
          <Button onClick={logout} color='inherit'>
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
};
