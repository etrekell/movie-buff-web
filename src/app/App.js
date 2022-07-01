import * as React from 'react';
import { theme } from './MuiAppTheme';
import { ThemeProvider } from '@mui/material';
import { MovieBuffPage } from '../components/MovieBuffPage';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MovieBuffPage />
    </ThemeProvider>
  );
};
