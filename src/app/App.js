import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './MuiAppTheme';
import { MovieBuffLogo } from '../components/MovieBuffLogo';
import { ThemeProvider, Typography, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { LoginFormDialog } from '../components/LoginFormDialog';
import { CrudApp } from '../firebaseCrudApp/CrudApp';

export const App = () => {
  const [showDialog, setShowDialog] = useState('none');

  const login = (formData) => {
    console.log('login', formData);
  };

  const register = (formData) => {
    console.log('register', formData);
  };

  const landingPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // 'vh' is Viewport Height - The unis is based on the height of the viewport.
    height: '100vh',
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/*<CrudApp />*/}

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
      <LoginFormDialog
        dialogType='login'
        showDialog={showDialog === 'login'}
        setOpenDialog={setShowDialog}
        onSubmit={login}
      />
      <LoginFormDialog
        dialogType='register'
        showDialog={showDialog === 'register'}
        setOpenDialog={setShowDialog}
        onSubmit={register}
      />
    </ThemeProvider>
  );
};
