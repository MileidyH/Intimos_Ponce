import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv6zW1NI31RZWqPVQHdrm95RG3DqxmOR8",
  authDomain: "fbp1-1c468.firebaseapp.com",
  projectId: "fbp1-1c468",
  storageBucket: "fbp1-1c468.appspot.com",
  messagingSenderId: "211200991215",
  appId: "1:211200991215:web:cf52516333a1a258bb601a",
  measurementId: "G-L09LLKZP9Y"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);