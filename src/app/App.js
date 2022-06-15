import * as React from 'react';
import { auth } from '../firebaseConfig';
import { theme } from './MuiAppTheme';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { UnauthenticatedApp } from '../components/UnauthenticatedApp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthenticatedApp } from '../components/AuthenticatedApp';

export const App = () => {
  const [user, setUser] = useState(null);

  const login = (formData) => {
    signInWithEmailAndPassword(auth, formData.username, formData.password).then((userCreds) => {
      console.log('login', formData);
      setUser(userCreds);
    });
  };

  const register = (formData) => {
    createUserWithEmailAndPassword(auth, formData.username, formData.password).then((userCreds) => {
      console.log('register', formData);
      setUser(userCreds);
    });
  };

  const logout = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <ThemeProvider theme={theme}>
      {user ? (
        <AuthenticatedApp user={user.user} logout={logout} />
      ) : (
        <UnauthenticatedApp login={login} register={register} />
      )}
    </ThemeProvider>
  );
};
