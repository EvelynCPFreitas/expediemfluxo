// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUIIN9NLD3TcSJ78r22UbkMFVGs3D7ryE",
  authDomain: "expediemfluxo.firebaseapp.com",
  projectId: "expediemfluxo",
  storageBucket: "expediemfluxo.firebasestorage.app",
  messagingSenderId: "1075886554719",
  appId: "1:1075886554719:web:6dff17a3b6874f1cc925ea",
  measurementId: "G-18WKK75YLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
