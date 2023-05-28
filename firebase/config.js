// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsnylyXeDmthAeyinZ_7Uf2RRCUtYexIo",
  authDomain: "post-image-a6b65.firebaseapp.com",
  projectId: "post-image-a6b65",
  storageBucket: "post-image-a6b65.appspot.com",
  messagingSenderId: "754810645535",
  appId: "1:754810645535:web:629d502ccad2aa8142f92a",
  measurementId: "G-GCH2YF811V"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);