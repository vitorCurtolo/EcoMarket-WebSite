// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Rss7E2DQ730oOvFfl7Hk3m07fCyGs68",
  authDomain: "ecomarketifsp.firebaseapp.com",
  projectId: "ecomarketifsp",
  storageBucket: "ecomarketifsp.appspot.com",
  messagingSenderId: "879051985100",
  appId: "1:879051985100:web:e1a937cb3bfab6235a7269",
  measurementId: "G-NWRJXHYREW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };