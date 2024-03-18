// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxpdkcXuJL6SMFZdBl9J76rREE8QTTv1A",
    authDomain: "realtor-clone-react-823d9.firebaseapp.com",
    projectId: "realtor-clone-react-823d9",
    storageBucket: "realtor-clone-react-823d9.appspot.com",
    messagingSenderId: "1095955548162",
    appId: "1:1095955548162:web:ef778995d766af7730ff1b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()