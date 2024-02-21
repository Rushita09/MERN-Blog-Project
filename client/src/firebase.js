// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-eed2c.firebaseapp.com",
  projectId: "mern-stack-eed2c",
  storageBucket: "mern-stack-eed2c.appspot.com",
  messagingSenderId: "657865271449",
  appId: "1:657865271449:web:a12ab5a3c0dda197a73008"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);