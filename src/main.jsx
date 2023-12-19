import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0-uuOGM_qSLQFdsJKkfX_iMFxbNR9Vrs",
  authDomain: "coderhouse-58180.firebaseapp.com",
  projectId: "coderhouse-58180",
  storageBucket: "coderhouse-58180.appspot.com",
  messagingSenderId: "404245121341",
  appId: "1:404245121341:web:7dbc3f17eea5e091081d54"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
