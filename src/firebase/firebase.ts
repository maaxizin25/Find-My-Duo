import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgEpt5Z3FeLcIGarhI2KnilnTopsSQR2M",
  authDomain: "find-my-duo-93708.firebaseapp.com",
  projectId: "find-my-duo-93708",
  storageBucket: "find-my-duo-93708.appspot.com",
  messagingSenderId: "481927777252",
  appId: "1:481927777252:web:da7b8c6db0ac514cb315f1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);