import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc-XCgyRkblI2PDgjN5Vg4qy3untVrpzQ",
  authDomain: "motorworks-4cc1d.firebaseapp.com",
  projectId: "motorworks-4cc1d",
  storageBucket: "motorworks-4cc1d.appspot.com",
  messagingSenderId: "1086428801545",
  appId: "1:1086428801545:web:55e7518a76dd81b104e6d8"
};

export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)