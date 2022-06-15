import React from 'react';
import { Button } from '@mui/material';

export const AuthenticatedApp = ({ user, logout }) => {
  return (
    <div>
      <h1>Authenticated</h1>
      <p>Logged in as: {user.email}</p>
      <Button onClick={() => logout('none')}>Logout</Button>
    </div>
  );
};
