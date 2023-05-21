// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkw5Tj-h_n9LZaxXjgnLab5YO9Y6Comlg",
  authDomain: "smreact-7e78a.firebaseapp.com",
  projectId: "smreact-7e78a",
  storageBucket: "smreact-7e78a.appspot.com",
  messagingSenderId: "145354996092",
  appId: "1:145354996092:web:5323b1f26a084ce7b04cf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app