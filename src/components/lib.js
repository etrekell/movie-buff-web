import { Button, CircularProgress, Typography } from '@mui/material';
import { useMatch, useNavigate } from 'react-router-dom';

const centeredStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '85vh',
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

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div style={centeredStyle}>
      <Typography sx={{ fontWeight: 'bold', fontSize: 32, paddingBottom: '10px' }}>Page Not Found</Typography>
      <Button variant='contained' color='inherit' onClick={() => navigate('/discover')}>
        Go Home
      </Button>
    </div>
  );
};

const NavButton = ({ path, children }) => {
  const match = useMatch(path);
  const navigate = useNavigate();
  const underlineStyle = match ? { textDecoration: 'underline' } : null;

  return (
    <Button color='inherit' sx={underlineStyle} onClick={() => navigate(path)}>
      {children}
    </Button>
  );
};

export { FullPageLoadingSpinner, SomethingsWrongError, NotFoundPage, NavButton, centeredStyle };
