import React from 'react';
import { AppBar as MuiAppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { MovieBuffLogo } from './MovieBuffLogo';
import { NavButton } from './lib';
import { theme } from '../app/MuiAppTheme';
import { useNavigate } from 'react-router-dom';
import { UserMenu } from './UserMenu';

export const AppBar = ({ user, logout, login, register }) => {
  const navigate = useNavigate();

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
        <UserMenu user={user} logout={logout} login={login} register={register} />
      </Toolbar>
    </MuiAppBar>
  );
};
