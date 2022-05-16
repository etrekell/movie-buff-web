import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './MuiAppTheme';
import { MovieBuffLogo } from '../components/MovieBuffLogo';
import {
  ThemeProvider,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { LoginForm } from '../components/LoginForm';

export const App = () => {
  const [openDialog, setOpenDialog] = useState('none');

  const login = (formData) => {
    console.log('login', formData);
  };

  const register = (formData) => {
    console.log('register', formData);
  };

  const landingStyle = {
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
      <div style={landingStyle}>
        <MovieBuffLogo width='250' height='250' />
        <Typography variant='h1'>Movie Buff</Typography>
        <Stack spacing={2} direction='row' style={{ padding: '20px' }}>
          <Button variant='contained' onClick={() => setOpenDialog('login')}>
            Login
          </Button>
          <Button variant='outlined' onClick={() => setOpenDialog('register')}>
            Register
          </Button>
        </Stack>
      </div>
      <Dialog open={openDialog === 'login'} aria-labelledby='dialog-title'>
        <DialogActions>
          <Button onClick={() => setOpenDialog('none')}>Close</Button>
        </DialogActions>
        <DialogTitle id='dialog-title'>Login</DialogTitle>
        <DialogContent>
          <LoginForm onSubmit={login} buttonText='Login' />
        </DialogContent>
      </Dialog>
      <Dialog open={openDialog === 'register'} aria-labelledby='dialog-title'>
        <DialogActions>
          <Button onClick={() => setOpenDialog('none')}>Close</Button>
        </DialogActions>
        <DialogTitle id='dialog-title'>Register</DialogTitle>
        <DialogContent>
          <LoginForm onSubmit={register} buttonText='Register' />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};
