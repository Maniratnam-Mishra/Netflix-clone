
import { initializeApp } from "firebase/app";
import{ getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDVegnIs4rCksHeI5sbv7KJDGNPYRUAVPw",
  authDomain: "react-maniratnam.firebaseapp.com",
  projectId: "react-maniratnam",
  storageBucket: "react-maniratnam.appspot.com",
  messagingSenderId: "463755908307",
  appId: "1:463755908307:web:ffbb4de94cda599bb7b026",
  measurementId: "G-DRHBT86M9Y"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);