import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkGmokW285RxesrlEOEGMOpL7DjBMvk_U",
  authDomain: "galapago-d4744.firebaseapp.com",
  databaseURL: "https://galapago-d4744-default-rtdb.firebaseio.com",
  projectId: "galapago-d4744",
  storageBucket: "galapago-d4744.appspot.com",
  messagingSenderId: "508955483910",
  appId: "1:508955483910:web:e910e43a67fdbca4c64887",
  measurementId: "G-YFNZ5NMK3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
