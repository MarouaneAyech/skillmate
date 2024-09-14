// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyDqRGhdSrDVhK1685_HPhJwrB-65Hmd9bs",
    authDomain: "skillmate-29f38.firebaseapp.com",
    projectId: "skillmate-29f38",
    storageBucket: "skillmate-29f38.appspot.com",
    messagingSenderId: "74279534766",
    appId: "1:74279534766:web:e27561f2216e9e7bce2d3f",
    measurementId: "G-RVPWBVY027"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage

// Export both Firestore (db) and Storage
export { db, storage };