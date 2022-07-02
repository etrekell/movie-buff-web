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
  const message = errorMessage ? errorMessage : 'Hmm... Something is wrong.';
  return (
    <div style={centeredStyle}>
      <Typography color='error' sx={{ fontWeight: 'bold', fontSize: 32 }}>
        Error:
      </Typography>
      <Typography color='error'>{message}</Typography>
      <Typography color='error'>Please try again.</Typography>
    </div>
  );
};

export { FullPageLoadingSpinner, SomethingsWrongError };
