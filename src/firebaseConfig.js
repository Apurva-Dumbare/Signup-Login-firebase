import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDdtZdBry1kikgkaRr81M3ENWbkHoTC0g",
  authDomain: "assignmate123.firebaseapp.com",
  databaseURL: "https://assignmate123-default-rtdb.firebaseio.com",
  projectId: "assignmate123",
  storageBucket: "assignmate123.appspot.com",
  messagingSenderId: "951187857625",
  appId: "1:951187857625:web:158a36e07b064dd0169ec8",
  measurementId: "G-CZ2VX07BTR",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
};
