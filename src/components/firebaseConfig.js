// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAcF1l-zOr8iLcErTEzBb5QaS6wzO6soY",
  authDomain: "learn-aut.firebaseapp.com",
  projectId: "learn-aut",
  storageBucket: "learn-aut.appspot.com",
  messagingSenderId: "163457513114",
  appId: "1:163457513114:web:857542102927a766ee1123",
  measurementId: "G-L80F8XC0NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;