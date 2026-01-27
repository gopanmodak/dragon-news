// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6tEwisyywliwcCew5G2KS9AxA8_xX16E",
  authDomain: "dragon-news-a57b1.firebaseapp.com",
  projectId: "dragon-news-a57b1",
  storageBucket: "dragon-news-a57b1.firebasestorage.app",
  messagingSenderId: "709091929804",
  appId: "1:709091929804:web:a0e3ca0e4e63b2d4235c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth