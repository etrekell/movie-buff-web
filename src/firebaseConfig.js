import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_API_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_FIREBASE_API_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_API_APP_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_API_MEASUREMENT_ID}`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
