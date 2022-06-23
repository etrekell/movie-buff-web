import React from 'react';
import { Button } from '@mui/material';

export const AuthenticatedApp = ({ user, logout }) => {
  const displayName = user ? user.displayName : '';
  return (
    <div>
      <h1>Authenticated</h1>
      <p>Logged in as: {displayName}</p>
      <Button variant='contained' onClick={() => logout('none')}>
        Logout
      </Button>
    </div>
  );
};
