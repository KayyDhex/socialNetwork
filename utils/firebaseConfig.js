import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDFC2HJqcHI0pjzJTy48C8vdxwRwGdXPSY",
    authDomain: "instagram-dam.firebaseapp.com",
    projectId: "instagram-dam",
    storageBucket: "instagram-dam.appspot.com",
    messagingSenderId: "149648082168",
    appId: "1:149648082168:web:cd420b422e2a1cff77270d",
    measurementId: "G-QF021N0YDV"
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
