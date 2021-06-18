import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSsy9baiJyGZ-SwlcQn_IT2HJMEOGwWZc",
    authDomain: "clone-80eb6.firebaseapp.com",
    projectId: "clone-80eb6",
    storageBucket: "clone-80eb6.appspot.com",
    messagingSenderId: "668317591667",
    appId: "1:668317591667:web:84a4794ddde991fa55a206"
})


const auth = firebase.auth();

export { auth };