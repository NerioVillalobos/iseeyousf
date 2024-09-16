// public/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBd0A85fKVSD9MIt3WzhYqDVxONmMXpxFU",
    authDomain: "iseeyousf-ddf1e.firebaseapp.com",
    projectId: "iseeyousf-ddf1e",
    storageBucket: "iseeyousf-ddf1e.appspot.com",
    messagingSenderId: "1094565393870",
    appId: "1:1094565393870:web:5f9cd6034796210d6b279f",
    measurementId: "G-KL9NV4ZS0B"
  };
  

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
