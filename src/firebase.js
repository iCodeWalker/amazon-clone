// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzxctoEBtA7Sigb4GqCycL20ceAWt9piQ",
  authDomain: "clone-a5231.firebaseapp.com",
  projectId: "clone-a5231",
  storageBucket: "clone-a5231.appspot.com",
  messagingSenderId: "578639150067",
  appId: "1:578639150067:web:5f9d607218f4fdefc2b086",
  measurementId: "G-M0BFTVB9DT",
};

//--- initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//--- initialize database
const db = firebaseApp.firestore();
//--- this gives us a variable to handle all the signing in
const auth = firebase.auth();

export { db, auth };
