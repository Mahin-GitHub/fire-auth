import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCnD-Ia7vXrMlMAV4XCZ5u8SV-yC_RYCFE",
  authDomain: "fire-base-9a681.firebaseapp.com",
  projectId: "fire-base-9a681",
  storageBucket: "fire-base-9a681.appspot.com",
  messagingSenderId: "606076540300",
  appId: "1:606076540300:web:855335f63485d511e1f2a9"
};
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);



