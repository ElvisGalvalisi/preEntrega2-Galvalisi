
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZwNW6uT2bJU5auUzZiRORqDMuBh8GY5k",
  authDomain: "elvis-fotografia.firebaseapp.com",
  projectId: "elvis-fotografia",
  storageBucket: "elvis-fotografia.appspot.com",
  messagingSenderId: "263829242845",
  appId: "1:263829242845:web:e41e9ac3d0adb85eef2c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)