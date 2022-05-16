import React from 'react';
import { Button } from '@mui/material';

export const LoginForm = ({ onSubmit, buttonText }) => {
  // Note: Whenever you make a form, the first thing you should do is make a handleSubmit method that prevents the default.
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    onSubmit({ username: username.value, password: password.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input id='username' type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input id='password' type='password' />
        </div>
        <div>
          <Button type='submit' variant='contained' color='primary'>
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};
