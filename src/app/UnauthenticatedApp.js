import React, { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { MovieBuffLogo } from '../components/MovieBuffLogo';
import { LoginFormDialog } from '../components/LoginFormDialog';
import { RegisterFormDialog } from '../components/RegisterFormDialog';
import { centeredStyle } from '../components/lib';

export const UnauthenticatedApp = ({ login, register }) => {
  const [showDialog, setShowDialog] = useState('none');

  return (
    <>
      <div style={centeredStyle}>
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
      <LoginFormDialog showDialog={showDialog === 'login'} setShowDialog={setShowDialog} onSubmit={login} />
      <RegisterFormDialog showDialog={showDialog === 'register'} setShowDialog={setShowDialog} onSubmit={register} />
    </>
  );
};
