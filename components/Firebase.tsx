// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZrzawI_v_cNYuHkYDRipH2zkqk3NQ9iw",
    authDomain: "michaelsroom.firebaseapp.com",
    projectId: "michaelsroom",
    storageBucket: "michaelsroom.appspot.com",
    messagingSenderId: "998515869746",
    appId: "1:998515869746:web:b82aa1a863fec978e9d42b",
    measurementId: "G-R0Z6M4Z6TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }