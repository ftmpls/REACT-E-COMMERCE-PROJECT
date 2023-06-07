// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGVjVj7Kf9Ht6Afh0f02hovFqVBJNl1vU",
  authDomain: "sofa-45ce9.firebaseapp.com",
  projectId: "sofa-45ce9",
  storageBucket: "sofa-45ce9.appspot.com",
  messagingSenderId: "638807300420",
  appId: "1:638807300420:web:f4bb56d81a747e02209f11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app)
export default app;