
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB15IBexNYkhG-fPnoFOWawjYSY6ECpxGc",
  authDomain: "vascodemo-79908.firebaseapp.com",
  projectId: "vascodemo-79908",
  storageBucket: "vascodemo-79908.appspot.com",
  messagingSenderId: "1034768883496",
  appId: "1:1034768883496:web:2256d764f2eeb7c031ba1d",
  measurementId: "G-92NKWLSE99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);