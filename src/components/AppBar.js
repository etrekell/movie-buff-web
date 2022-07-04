import React from 'react';
import { AppBar as MuiAppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { MovieBuffLogo } from './MovieBuffLogo';

export const AppBar = () => {
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
          {/*TODO: Replace these with real links*/}
          <Button color='inherit'>ONE</Button>
          <Button color='inherit'>TWO</Button>
          <Button color='inherit'>THREE</Button>
          <Button color='inherit'>LOGIN</Button>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
};
