import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXoz-M65Bg2zIrBEec7unOfktlYTsLJgU",
  authDomain: "contact-b571a.firebaseapp.com",
  projectId: "contact-b571a",
  storageBucket: "contact-b571a.appspot.com",
  messagingSenderId: "361255759158",
  appId: "1:361255759158:web:ab0477dd916ae6a4dc1797",
  measurementId: "G-3Y7LGS22M9"
});

var db = firebaseApp.firestore();

export { db };