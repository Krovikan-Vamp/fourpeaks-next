import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: "fourpeaks-sc.firebaseapp.com",
  projectId: "fourpeaks-sc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export { app, firebaseConfig, firestore }