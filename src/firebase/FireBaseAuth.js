// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsbFZ8S3lmzxjpBafQ8hs9obGy59S2QCg",
  authDomain: "crowdcube-a0a3a.firebaseapp.com",
  projectId: "crowdcube-a0a3a",
  storageBucket: "crowdcube-a0a3a.firebasestorage.app",
  messagingSenderId: "1012824988646",
  appId: "1:1012824988646:web:bafad5c9e79090ffbb9427",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
