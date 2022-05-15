import * as React from 'react';
import { MovieBuffLogo } from '../component/MovieBuffLogo';
import { ThemeProvider } from '@mui/material';
import { theme } from './MuiAppTheme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MovieBuffLogo width='200' height='200' />
        <h1>Movie Buff App</h1>
        <div>
          <button onClick={() => alert('Login clicked')}>Login</button>
        </div>
        <div>
          <button onClick={() => alert('Register clicked')}>Register</button>
        </div>
      </div>
    </ThemeProvider>
  );
};
