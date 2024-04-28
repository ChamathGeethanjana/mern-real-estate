// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-2a044.firebaseapp.com",
  projectId: "mern-real-estate-2a044",
  storageBucket: "mern-real-estate-2a044.appspot.com",
  messagingSenderId: "49004475479",
  appId: "1:49004475479:web:4f3ee83c6c49081ff1df12",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
