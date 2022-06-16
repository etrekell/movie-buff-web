import React, { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { MovieBuffLogo } from './MovieBuffLogo';
import { LoginFormDialog } from './LoginFormDialog';
import { RegisterFormDialog } from './RegisterFormDialog';

const landingPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  // 'vh' is Viewport Height - The unis is based on the height of the viewport.
  height: '100vh',
};

export const UnauthenticatedApp = ({ login, register }) => {
  const [showDialog, setShowDialog] = useState('none');

  return (
    <>
      <div style={landingPageStyle}>
        <MovieBuffLogo width='250' height='250' />
        <Typography variant='h1'>Movie Buff</Typography>
        <Stack spacing={2} direction='row' style={{ padding: '20px' }}>
          <Button variant='contained' onClick={() => setShowDialog('login')}>
            Login
          </Button>
          <Button variant='outlined' onClick={() => setShowDialog('register')}>
            Register
          </Button>
        </Stack>
      </div>
      <LoginFormDialog showDialog={showDialog === 'login'} setOpenDialog={setShowDialog} onSubmit={login} />
      <RegisterFormDialog showDialog={showDialog === 'register'} setOpenDialog={setShowDialog} onSubmit={register} />
    </>
  );
};
