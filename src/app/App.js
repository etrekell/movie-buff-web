import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './MuiAppTheme';
import { MovieBuffLogo } from '../components/MovieBuffLogo';
import { ThemeProvider, Typography, Button } from '@mui/material';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <MovieBuffLogo width='250' height='250' />
        <Typography variant='h1'>Movie Buff App</Typography>
        <Button variant='contained' onClick={() => alert('Login clicked')}>
          Login
        </Button>
        <Button variant='outlined' onClick={() => alert('Register clicked')}>
          Register
        </Button>
      </div>
    </ThemeProvider>
  );
};
