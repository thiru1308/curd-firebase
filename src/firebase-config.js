import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7c3OZwcicei6L6Y3AgZXzTUXw8ZutjmM",
  authDomain: "curd-67bf4.firebaseapp.com",
  projectId: "curd-67bf4",
  storageBucket: "curd-67bf4.appspot.com",
  messagingSenderId: "1093462300737",
  appId: "1:1093462300737:web:c6c855cb650efa47fbcec0",
  measurementId: "G-G12TDFT4X9",
};

const app = initializeApp(firebaseConfig);
export default app;
const db = getFirestore();
export { db };
