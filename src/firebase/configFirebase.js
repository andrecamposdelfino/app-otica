// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoDChit706g6Iujv2PzU4iCDYcuhJgBrI",
  authDomain: "oticamariana-34d0e.firebaseapp.com",
  projectId: "oticamariana-34d0e",
  storageBucket: "oticamariana-34d0e.firebasestorage.app",
  messagingSenderId: "638016253183",
  appId: "1:638016253183:web:67ec52744a5b51eba630ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}