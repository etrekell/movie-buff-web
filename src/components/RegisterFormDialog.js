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

export const RegisterFormDialog = ({ showDialog, setShowDialog, onSubmit }) => {
  const dialogTitle = 'Register';
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // This has to be "username" and can’t be "userName" - This is because it has to match what is in the elements object
    // i.e., whatever you named the id for the input field
    const { email, username, password } = e.target.elements;
    onSubmit({ email: email.value, username: username.value, password: password.value });
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
            id='username'
            label='Username'
            variant='outlined'
            size='small'
            margin='dense'
            type='text'
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
                    edge='end'
                  >
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
