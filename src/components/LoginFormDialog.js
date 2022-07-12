import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const LoginFormDialog = ({ showDialog, setShowDialog, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dialogTitle = 'Login';

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    onSubmit({ email: email.value, password: password.value });
    setShowDialog('none');
  };

  return (
    <Dialog open={showDialog} aria-labelledby='dialog-title'>
      <form onSubmit={handleSubmit}>
        <DialogTitle id='dialog-title'>{dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            id='email'
            label='Email'
            variant='outlined'
            size='small'
            margin='dense'
            type='email'
            required
          />
          <TextField
            fullWidth
            id='password'
            label='Password'
            variant='outlined'
            size='small'
            margin='dense'
            type={showPassword ? 'text' : 'password'}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button type='submit' variant='contained'>
            {dialogTitle}
          </Button>
          <Button onClick={() => setShowDialog('none')}>Close</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
