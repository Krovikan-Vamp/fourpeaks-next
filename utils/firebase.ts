import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9Tr2rrRrcspn9hfcO-27qqDdzNlvtlRo",
    authDomain: "fourpeaks-sc.firebaseapp.com",
    projectId: "fourpeaks-sc",
    storageBucket: "fourpeaks-sc.appspot.com",
    messagingSenderId: "740169779172",
    appId: "1:740169779172:web:2159a61789440068c169f1",
    measurementId: "G-2CQL4SVEZ2"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const firestore = getFirestore();
  
  export { app, firebaseConfig, firestore }