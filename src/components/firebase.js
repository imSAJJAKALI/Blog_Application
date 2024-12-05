// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqWlUV_2Wq23R7UjFLz_TVA78-H6hbadM",
  authDomain: "blog-auth-2a74b.firebaseapp.com",
  projectId: "blog-auth-2a74b",
  storageBucket: "blog-auth-2a74b.firebasestorage.app",
  messagingSenderId: "366417361027",
  appId: "1:366417361027:web:2f5e02438b4e391859c3b6",
  measurementId: "G-HVHMKJVQKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app)
export default app;
