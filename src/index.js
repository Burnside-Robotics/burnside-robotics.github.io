import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.tsx';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyCMl-G95hqOYmfgJPgRCbATuE6r5s-AT9s",
    authDomain: "burnside-robotics-website.firebaseapp.com",
    projectId: "burnside-robotics-website",
    storageBucket: "burnside-robotics-website.appspot.com",
    messagingSenderId: "32022669627",
    appId: "1:32022669627:web:4f620f64d8e474ea222f1e",
    measurementId: "G-QQWBB5QGHY"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
