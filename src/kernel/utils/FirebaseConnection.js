// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfTWWCjBNp7png9K94d2A88vRR6_SSbjk",
  authDomain: "mijangosapp.firebaseapp.com",
  projectId: "mijangosapp",
  storageBucket: "mijangosapp.firebasestorage.app",
  messagingSenderId: "746065902136",
  appId: "1:746065902136:web:db6d19448deff37f0e04cd",
  measurementId: "G-7LC3EMBBCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);

export {app, auth, db, storage};

