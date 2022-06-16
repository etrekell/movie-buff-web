import * as React from 'react';
import { auth } from '../firebaseConfig';
import { theme } from './MuiAppTheme';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { UnauthenticatedApp } from '../components/UnauthenticatedApp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { AuthenticatedApp } from '../components/AuthenticatedApp';

export const App = () => {
  const [user, setUser] = useState(null);

  const login = (formData) => {
    signInWithEmailAndPassword(auth, formData.email, formData.password).then((userCreds) => {
      console.log('login', formData);
      setUser(userCreds);
    });
  };

  const register = (formData) => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password).then((userCreds) => {
      console.log('register', formData);
      updateProfile(auth.currentUser, {
        displayName: formData.username,
      }).then(() => setUser(userCreds));
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
