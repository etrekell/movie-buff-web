import React from 'react';
import { SignUp } from './SignUp';
import { AuthProvider } from './AuthContext';
import { CurrentUserInfo } from './CurrentUserInfo';
import { Login } from './LogIn';
import { AppBasedOnAuth } from './AppBasedOnAuth';

export const CrudApp = () => {
  return (
    <AuthProvider>
      <div>
        <h1>This is a CRUD app</h1>
        <CurrentUserInfo />
        <SignUp />
        <p>Already have an account? Sign In below</p>
        <Login />
        <hr />
        <AppBasedOnAuth />
      </div>
    </AuthProvider>
  );
};
