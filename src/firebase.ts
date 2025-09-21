// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaUzP4fukWaHjAJXV2WRjtlHY5hokHz6I",
  authDomain: "nativeedgestudio.firebaseapp.com",
  projectId: "nativeedgestudio",
  storageBucket: "nativeedgestudio.firebasestorage.app",
  messagingSenderId: "143132269653",
  appId: "1:143132269653:web:16560334aa25c1a910c8dc",
  measurementId: "G-TZ8Y3VFGG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };