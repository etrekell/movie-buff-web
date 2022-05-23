import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const UnauthenticatedApp = () => {
  return (
    <div>
      <p>You're not allowed here. Log in or create an account.</p>
    </div>
  );
};
