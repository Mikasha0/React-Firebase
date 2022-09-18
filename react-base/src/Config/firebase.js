// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiEtxnkQtXLPJaVDNf16dR5rUsPO4IOq4",
  authDomain: "react-firebase-6c69b.firebaseapp.com",
  projectId: "react-firebase-6c69b",
  storageBucket: "react-firebase-6c69b.appspot.com",
  messagingSenderId: "482658068372",
  appId: "1:482658068372:web:e4fbef8b7ddf5083899181",
  measurementId: "G-V4LQNFK27N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
