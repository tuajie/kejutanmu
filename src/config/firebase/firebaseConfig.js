import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBGQMygbiFfr2joPNLaRT8WXOCq7pU6R1k",
    authDomain: "kejutanmu-b3770.firebaseapp.com",
    databaseURL: "https://kejutanmu-b3770.firebaseio.com",
    projectId: "kejutanmu-b3770",
    storageBucket: "kejutanmu-b3770.appspot.com",
    messagingSenderId: "285517197000",
    appId: "1:285517197000:web:71baf135ce7bfa869c3ffd",
    measurementId: "G-3P92KG9XY5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

var database = firebase.database();

  export default firebase;