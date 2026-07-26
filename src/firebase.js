import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpiW_Sg0xRMqS51Eyd1pnG_BMH-EC-_z0",
  authDomain: "luxion-motors.firebaseapp.com",
  projectId: "luxion-motors",
  storageBucket: "luxion-motors.firebasestorage.app",
  messagingSenderId: "572716025142",
  appId: "1:572716025142:web:23f125f2f5679564651f97",
  measurementId: "G-7WVP56GQ8C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
