import * as React from 'react';
import { auth } from '../firebaseConfig';
import { theme } from './MuiAppTheme';
import { ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { UnauthenticatedApp } from '../components/UnauthenticatedApp';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { AuthenticatedApp } from '../components/AuthenticatedApp';
import { useAsync } from '../utilities/hooks/useAsync';

const getAuthStateChangedPromise = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        resolve(user);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const App = () => {
  const { data: user, setData: setUser, run, isLoading, isIdle, isError, isSuccess } = useAsync();

  // Without this, the user is logged out on every refresh
  useEffect(() => {
    run(getAuthStateChangedPromise());
  }, [run]);

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

  if (isLoading || isIdle) {
    // TODO: replace with a fancy spinner
    return <h1>LOADING...</h1>;
  }

  if (isError) {
    // TODO: replace with something better
    return <h1>ERROR</h1>;
  }

  if (isSuccess) {
    return (
      <ThemeProvider theme={theme}>
        {user ? (
          <AuthenticatedApp user={user} logout={logout} />
        ) : (
          <UnauthenticatedApp login={login} register={register} />
        )}
      </ThemeProvider>
    );
  }
};
