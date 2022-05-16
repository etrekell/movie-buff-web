import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { LoginForm } from './LoginForm';

export const LoginDialog = ({ dialogType, showDialog, setOpenDialog, handleSubmit }) => {
  const dialogTitle = dialogType.charAt(0).toUpperCase() + dialogType.slice(1);

  return (
    <Dialog open={showDialog} aria-labelledby='dialog-title'>
      <DialogActions>
        <Button onClick={() => setOpenDialog('none')}>Close</Button>
      </DialogActions>
      <DialogTitle id='dialog-title'>{dialogTitle}</DialogTitle>
      <DialogContent>
        <LoginForm onSubmit={handleSubmit} buttonText={dialogTitle} />
      </DialogContent>
    </Dialog>
  );
};
