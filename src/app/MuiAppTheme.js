import { createTheme } from '@mui/material';
import '../app/styles.css';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2d4452',
    },
    secondary: {
      main: '#b314e8',
    },
    background: {
      default: '#fafafa',
      paper: '#f5f5f5',
    },
    type: 'light',
    info: {
      main: '#2196f3',
    },
  },
  spacing: 8,
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
});
