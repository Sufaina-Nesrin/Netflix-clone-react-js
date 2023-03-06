import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged, signOut }from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB5bCY0ntw3uVgWsSRkRWjih5fCAY90RqA",
    authDomain: "netflix-project-ce58c.firebaseapp.com",
    projectId: "netflix-project-ce58c",
    storageBucket: "netflix-project-ce58c.appspot.com",
    messagingSenderId: "249244896798",
    appId: "1:249244896798:web:70efb84a99ddc0b586280f",
    measurementId: "G-V9S3TYK37Z"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const create = createUserWithEmailAndPassword;
export const login = signInWithEmailAndPassword;
export const checkUser = onAuthStateChanged;
export const signout = signOut;