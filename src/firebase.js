// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f4a4d.firebaseapp.com",
  projectId: "mern-estate-f4a4d",
  storageBucket: "mern-estate-f4a4d.appspot.com",
  messagingSenderId: "290486518922",
  appId: "1:290486518922:web:9c0b074398fcbf24075973",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
