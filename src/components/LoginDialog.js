import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { LoginForm } from './LoginForm';

export const LoginDialog = ({ openDialog, setOpenDialog, login }) => {
  return (
    <Dialog open={openDialog === 'login'} aria-labelledby='dialog-title'>
      <DialogActions>
        <Button onClick={() => setOpenDialog('none')}>Close</Button>
      </DialogActions>
      <DialogTitle id='dialog-title'>Login</DialogTitle>
      <DialogContent>
        <LoginForm onSubmit={login} buttonText='Login' />
      </DialogContent>
    </Dialog>
  );
};
