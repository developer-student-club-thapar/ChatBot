// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy2Bb5ddVJlmx0HidEqWLe3YLvwOusd0M",
  authDomain: "chat-bot-54af8.firebaseapp.com",
  projectId: "chat-bot-54af8",
  storageBucket: "chat-bot-54af8.appspot.com",
  messagingSenderId: "903757922798",
  appId: "1:903757922798:web:2372c885f0a10de9844eff",
  measurementId: "G-Y424MWY77L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app)
export const auth = getAuth(app);