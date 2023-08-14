// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuAyPy2OCnKq_6rmFWmLpTiVlMj0kjYq0",
  authDomain: "movie-house-f41c9.firebaseapp.com",
  projectId: "movie-house-f41c9",
  storageBucket: "movie-house-f41c9.appspot.com",
  messagingSenderId: "703648632357",
  appId: "1:703648632357:web:9872026dc62dce2f48f9cc",
  measurementId: "G-QQHC2NJB04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);