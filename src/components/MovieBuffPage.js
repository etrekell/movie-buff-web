import * as React from 'react';
import { auth } from '../firebaseConfig';
import { useEffect } from 'react';
import { UnauthenticatedApp } from './UnauthenticatedApp';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { AuthenticatedApp } from './AuthenticatedApp';
import { useAsync } from '../utilities/hooks/useAsync';
import { FullPageLoadingSpinner, SomethingsWrongError } from './lib';
import { AppBar } from './AppBar';

const getUserFromAuth = async () => {
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

export const MovieBuffPage = () => {
  const { data: user, setData: setUser, run, isLoading, isIdle, isSuccess, error } = useAsync();

  // Without this, the user is logged out on every refresh
  useEffect(() => {
    // By using the run function, all the state setting is happening with the useAsync hook
    run(getUserFromAuth());
  }, [run]);

  const login = (formData) => {
    signInWithEmailAndPassword(auth, formData.email, formData.password).then(({ user }) => {
      console.log('login', formData);
      setUser(user);
    });
  };

  const register = (formData) => {
    run(
      new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then(({ user }) => {
            console.log('register', formData);
            updateProfile(auth.currentUser, {
              displayName: formData.username,
            }).then(() => resolve(user));
          })
          .catch((reason) => reject(reason));
      })
    );
  };

  const logout = () => {
    signOut(auth).then(() => setUser(null));
  };

  const getStatusBasedComponent = () => {
    if (isLoading || isIdle) {
      return (
        <>
          <FullPageLoadingSpinner />
        </>
      );
    }

    if (isSuccess) {
      return (
        <>
          {user ? (
            <AuthenticatedApp user={user} logout={logout} />
          ) : (
            <UnauthenticatedApp login={login} register={register} />
          )}
        </>
      );
    }
    // if isError or anything else (Should never be anything else at this point but adding as a fallback)
    return (
      <>
        <SomethingsWrongError errorMessage={error ? error.message : null} />
      </>
    );
  };

  return (
    <>
      <AppBar user={user} logout={logout} />
      {getStatusBasedComponent()}
    </>
  );
};
