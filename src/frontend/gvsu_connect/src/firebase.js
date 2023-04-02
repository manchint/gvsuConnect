// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjQV7ak_ulqYHUbU-BzNdlnsVYee9g_28",
  authDomain: "gvsu-connect.firebaseapp.com",
  projectId: "gvsu-connect",
  storageBucket: "gvsu-connect.appspot.com",
  messagingSenderId: "383300951953",
  appId: "1:383300951953:web:fb97a1e1e88bcc268d0430"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();