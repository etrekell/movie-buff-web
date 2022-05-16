import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './MuiAppTheme';
import { MovieBuffLogo } from '../components/MovieBuffLogo';
import { ThemeProvider, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <MovieBuffLogo width='250' height='250' />
        <Typography variant='h1'>Movie Buff App</Typography>
        <Button variant='contained' onClick={() => setOpenDialog('login')}>
          Login
        </Button>
        <Button variant='outlined' onClick={() => setOpenDialog('register')}>
          Register
        </Button>
        <Dialog open={openDialog === 'login'} aria-labelledby='dialog-title'>
          <DialogActions>
            <Button onClick={() => setOpenDialog('none')}>Close</Button>
          </DialogActions>
          <DialogTitle id='dialog-title'>Login Form</DialogTitle>
          <DialogContent>
            <LoginForm onSubmit={login} buttonText='Login' />
          </DialogContent>
        </Dialog>
        <Dialog open={openDialog === 'register'} aria-labelledby='dialog-title'>
          <DialogTitle id='dialog-title'>Registration Form</DialogTitle>
          <DialogContent>
            <LoginForm onSubmit={register} buttonText='Register' />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog('none')}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};
