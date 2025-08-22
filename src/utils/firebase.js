// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPqORx4-Ofa5JqAZ_CTcQoLmTl_pkniBQ",
  authDomain: "sit313-task7-1p.firebaseapp.com",
  projectId: "sit313-task7-1p",
  storageBucket: "sit313-task7-1p.firebasestorage.app",
  messagingSenderId: "740947008016",
  appId: "1:740947008016:web:adf49a8f5ec81503bc8895",
  measurementId: "G-VL5Q2W62QZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
