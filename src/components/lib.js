import { CircularProgress, Typography } from '@mui/material';

const FullPageLoadingSpinner = () => {
  const fullPageSpinnerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  return (
    <div style={fullPageSpinnerStyle}>
      <CircularProgress color='primary' size={250} />
      <Typography color='primary' sx={{ pt: 10 }}>
        Loading...
      </Typography>
    </div>
  );
};

export { FullPageLoadingSpinner };
