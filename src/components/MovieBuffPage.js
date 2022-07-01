import * as React from 'react';
import { auth } from '../firebaseConfig';
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
import { FullPageLoadingSpinner } from '../components/lib';

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

export const MovieBuffPage = () => {
  const { data: user, setData: setUser, run, isLoading, isIdle, isError, isSuccess } = useAsync();

  // Without this, the user is logged out on every refresh
  useEffect(() => {
    // By using the run function, all the state setting is happening with the useAsync hook
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
    return <FullPageLoadingSpinner />;
  }

  if (isError) {
    // TODO: replace with something better
    return <h1>ERROR</h1>;
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
};
