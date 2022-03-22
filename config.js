import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDT6Xo3UUVRUVfMqKXDrj7-BE3n5Awz4A",
  authDomain: "e-ride-stage-pro-71.firebaseapp.com",
  projectId: "e-ride-stage-pro-71",
  storageBucket: "e-ride-stage-pro-71.appspot.com",
  messagingSenderId: "27538724535",
  appId: "1:27538724535:web:e501b4f61092f7d57d9f32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
//firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
