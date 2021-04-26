import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpJKTaUxWe7UMcyGZFrsOYP0CgOgb-BbI",
    authDomain: "pulmonary-disease-detection.firebaseapp.com",
    projectId: "pulmonary-disease-detection",
    storageBucket: "pulmonary-disease-detection.appspot.com",
    messagingSenderId: "1003399057615",
    appId: "1:1003399057615:web:660db3b3e146b6da17a7ba",
    measurementId: "G-5EE37Q0B96"
  };

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;