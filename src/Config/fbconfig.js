import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBv1UmoQxeuyN_fFi9O_NzVtAEw94nbdwM",
    authDomain: "store-7ba52.firebaseapp.com",
    databaseURL: "https://store-7ba52.firebaseio.com",
    projectId: "store-7ba52",
    storageBucket: "store-7ba52.appspot.com",
    messagingSenderId: "116316464288",
    appId: "1:116316464288:web:d73fa7edd14d33f0d255c5",
    measurementId: "G-SLJPS55LDE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots : true});
  const db = firebase.firestore();
  db.settings({timestampsInSnapshots : true});

  const auth = firebase.auth();

   

export default firebase;
export const db;
export const auth;
