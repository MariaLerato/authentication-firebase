
import firebase from "firebase";
import 'firebase/database'

const Config = {
    apiKey: "AIzaSyDKgP2tQJE1r1iVDbYjNt4DPr5lJzwbo-g",
    authDomain: "authenticate-7ddfa.firebaseapp.com",
    databaseURL: "https://authenticate-7ddfa-default-rtdb.firebaseio.com",
    projectId: "authenticate-7ddfa",
    storageBucket: "authenticate-7ddfa.appspot.com",
    messagingSenderId: "934686931046",
    appId: "1:934686931046:web:52522c209d1d5b6d8355a7",
    measurementId: "G-2PF1X2BYMY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(Config);
  

export default firebase.database()