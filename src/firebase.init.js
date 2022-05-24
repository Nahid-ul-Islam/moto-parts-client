// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCANYD7t07e6FPf9FtARTUqhn8YfhTxUZw",
  authDomain: "moto-parts-43e6f.firebaseapp.com",
  projectId: "moto-parts-43e6f",
  storageBucket: "moto-parts-43e6f.appspot.com",
  messagingSenderId: "322290828836",
  appId: "1:322290828836:web:b77a1982bb84ebb8a6bab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;