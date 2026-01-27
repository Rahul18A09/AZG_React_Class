
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxdfMDaLyTaay4Z-IWf1u1KYzjKF0J1f8",
  authDomain: "app-b1ba4.firebaseapp.com",
  projectId: "app-b1ba4",
  storageBucket: "app-b1ba4.firebasestorage.app",
  messagingSenderId: "319117260558",
  appId: "1:319117260558:web:e659e19610772e49d9895f",
  databaseURL: "https://app-b1ba4-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);