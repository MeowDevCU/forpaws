import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDX2z20Nyl5g8pLJjIqBf5CBqRmzr1Ha_8",
    authDomain: "meowdev-forpaws.firebaseapp.com",
    projectId: "meowdev-forpaws",
    storageBucket: "meowdev-forpaws.appspot.com",
    messagingSenderId: "605246127635",
    appId: "1:605246127635:web:615d590711f3adaf2e89e6",
    measurementId: "G-LS5SXRS4LP"

});
const db = firebaseApp.firestore();
const auth = getAuth();
const storage = firebase.storage();
const provider = new GoogleAuthProvider();



export { db, auth, storage, provider };
