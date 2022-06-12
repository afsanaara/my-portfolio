// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZp0tQbzPV-W9PrrRoEDxGdPrBbR2vIro",
  authDomain: "portfolio-1bb7d.firebaseapp.com",
  projectId: "portfolio-1bb7d",
  storageBucket: "portfolio-1bb7d.appspot.com",
  messagingSenderId: "196085079805",
  appId: "1:196085079805:web:a863ef80a80165a439e894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;