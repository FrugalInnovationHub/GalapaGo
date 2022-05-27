import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
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
export const app = initializeApp(firebaseConfig);

// Initialize Firebase/storage
export const storage = getStorage(app);

export const BASE_URL_OF_STORAGE = "gs://galapago-d4744.appspot.com/";
