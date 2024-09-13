// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCI8M2_h5C_cVHQ-eHow_R34q7bf7-Oby8",
    authDomain: "dam-instagram-2024-2.firebaseapp.com",
    projectId: "dam-instagram-2024-2",
    storageBucket: "dam-instagram-2024-2.appspot.com",
    messagingSenderId: "333821948253",
    appId: "1:333821948253:web:239589b7e84cbca2e7b8b4",
    measurementId: "G-FXM3T12P7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);