import React from 'react';
import { useAuth } from './AuthContext';
import { AuthenticatedApp } from './AuthenticatedApp';
import { UnauthenticatedApp } from './UnauthenticatedApp';

export const AppBasedOnAuth = () => {
  const { currentUser } = useAuth();
  return <div>{currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
};
