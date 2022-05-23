import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';

// Fix this warning
const AuthContext = React.createContext();

export const useAuth = () => {
  console.log(AuthContext);
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password, username) => {
    // Handle this promise - Either just return it and handle it where it's used or handle it here, figure out which would be better
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: username,
      });
    });
  };

  const logIn = (email, password) => {
    // Handle this promise - Either just return it and handle it where it's used or handle it here, figure out which would be better
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    console.log('Inside of logOut');
    // Handle this promise - Either just return it and handle it where it's used or handle it here, figure out which would be better
    signOut(auth);
  };

  const resetPassword = (password) => {
    console.log('Inside of resetPassword');
    // Handle this promise - Either just return it and handle it where it's used or handle it here, figure out which would be better
    sendPasswordResetEmail(auth, password);
  };

  useEffect(() => {
    // onAuthStateChanged returns this method that we can use to unsubscribe
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log('onAuthStateChanged with user', user);
      console.log('currentUser from state', currentUser);
      console.log('currentUserFrom Auth', auth.currentUser);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
    </div>
  );
};
