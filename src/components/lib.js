import { CircularProgress, Typography } from '@mui/material';

const centeredStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const FullPageLoadingSpinner = () => {
  return (
    <div style={centeredStyle}>
      <CircularProgress color='primary' size={250} />
      <Typography color='primary' sx={{ pt: 10 }}>
        Loading...
      </Typography>
    </div>
  );
};

const SomethingsWrongError = ({ errorMessage }) => {
  return (
    <div style={centeredStyle}>
      <Typography color='error'>Hmmm.. Something is wrong, try refreshing!</Typography>
      <Typography color='error'>{errorMessage ? errorMessage : null}</Typography>
    </div>
  );
};

export { FullPageLoadingSpinner, SomethingsWrongError };
