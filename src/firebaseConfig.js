// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyBMjUSnWZKfn53Zp4PohhXdU8Z34zY2pqo",
    authDomain: "skillmate-8a826.firebaseapp.com",
    projectId: "skillmate-8a826",
    storageBucket: "skillmate-8a826.appspot.com",
    messagingSenderId: "497215767576",
    appId: "1:497215767576:web:0c3e4a5aef02792b66ef6d",
    measurementId: "G-VT1M5GH42C"
};

const app = initializeApp(firebaseConfig);


// Initialize Firestore and Storage
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage

// Export both Firestore (db) and Storage
export { db, storage };