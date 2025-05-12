
import {  getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyBnFNLxwKZ7YXT8Ur08u8MqiyWMUMp68-8",
  authDomain: "necxis-153c2.firebaseapp.com",
  projectId: "necxis-153c2",
  storageBucket: "necxis-153c2.firebasestorage.app",
  messagingSenderId: "61431126305",
  appId: "1:61431126305:web:f2d240fcb50a137e900660"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);