import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database"


const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  RAECT_APP_MESSAGING_SENDER_ID,
  REACT_APP_API_ID,
} = process.env;

console.log(  REACT_APP_DATABASE_URL);
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL:  REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: RAECT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_API_ID,
};


 const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);