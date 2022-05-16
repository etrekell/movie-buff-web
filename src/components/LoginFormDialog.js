import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export const LoginFormDialog = ({ dialogType, showDialog, setOpenDialog, onSubmit }) => {
  const dialogTitle = dialogType.charAt(0).toUpperCase() + dialogType.slice(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    onSubmit({ username: username.value, password: password.value });
    setOpenDialog('none');
  };

  return (
    <Dialog open={showDialog} aria-labelledby='dialog-title'>
      <form onSubmit={handleSubmit}>
        <DialogTitle id='dialog-title'>{dialogTitle}</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              autoFocus
              id='username'
              label='Username'
              variant='outlined'
              size='small'
              margin='dense'
              type='text'
            />
          </div>
          <div>
            <TextField id='password' label='Password' variant='outlined' size='small' margin='dense' type='password' />
          </div>
        </DialogContent>
        <DialogActions>
          <Button type='submit' variant='contained'>
            {dialogTitle}
          </Button>
          <Button onClick={() => setOpenDialog('none')}>Close</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
