import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { UpdateProfile } from './UpdateProfile';

export const CurrentUserInfo = () => {
  const { currentUser, logOut } = useAuth();
  const [error, setError] = useState('');

  const logOutHandler = async () => {
    setError('');
    try {
      await logOut();
    } catch {
      setError('Failed to log out');
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {currentUser ? (
        <div>
          <p>Currently signed in: {currentUser.displayName}</p>
          <button onClick={logOutHandler}>Log out</button>
          <UpdateProfile />
        </div>
      ) : (
        <p>Unknown, try refreshing</p>
      )}
    </div>
  );
};
