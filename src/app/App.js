import * as React from 'react';
import { auth } from '../firebaseConfig';
import { theme } from './MuiAppTheme';
import { ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { UnauthenticatedApp } from '../components/UnauthenticatedApp';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { AuthenticatedApp } from '../components/AuthenticatedApp';

export const App = () => {
  const [user, setUser] = useState(null);

  // Without this, the user is logged out on every refresh
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      }
    });
    // This empty array means that it happens on every onMount
  }, []);

  const login = (formData) => {
    signInWithEmailAndPassword(auth, formData.email, formData.password).then(({ user }) => {
      console.log('login', formData);
      setUser(user);
    });
  };

  const register = (formData) => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password).then(({ user }) => {
      console.log('register', formData);
      updateProfile(auth.currentUser, {
        displayName: formData.username,
      }).then(() => setUser(user));
    });
  };

  const logout = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <ThemeProvider theme={theme}>
      {user ? (
        <AuthenticatedApp user={user} logout={logout} />
      ) : (
        <UnauthenticatedApp login={login} register={register} />
      )}
    </ThemeProvider>
  );
};
