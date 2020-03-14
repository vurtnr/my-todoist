import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDmXHouB5kniM53L-xnrEZmTDINMah0GVI",
  authDomain: "godteachhowtocode.firebaseapp.com",
  databaseURL: "https://godteachhowtocode.firebaseio.com",
  projectId: "godteachhowtocode",
  storageBucket: "godteachhowtocode.appspot.com",
  messagingSenderId: "28510631411",
  appId: "1:28510631411:web:460c2ce005f83e718b0e86",
  measurementId: "G-36EZ2X29JH"
});

export {firebaseConfig as firebase};