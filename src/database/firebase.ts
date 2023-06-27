import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4RMmJxQqC2gHYTmoGR0_NAfgPO0NTpwc",
  authDomain: "kat-motorworks.firebaseapp.com",
  projectId: "kat-motorworks",
  storageBucket: "kat-motorworks.appspot.com",
  messagingSenderId: "1073749475271",
  appId: "1:1073749475271:web:7e83ca1918cce66b9263e2",
  measurementId: "G-WG67C1GVMW"
}

export const firebaseApp = initializeApp(firebaseConfig)