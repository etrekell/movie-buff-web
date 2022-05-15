import { createTheme } from '@mui/material';
import '../app/styles.css';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#74006f',
    },
    secondary: {
      main: '#ff4f00',
    },
  },
  spacing: 8,
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
});
