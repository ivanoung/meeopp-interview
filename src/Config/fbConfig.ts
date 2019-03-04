import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAzx9fWrdK_tgKtRik-eqqYH3RsEVJAVZs",
    authDomain: "meeopp-interview.firebaseapp.com",
    databaseURL: "https://meeopp-interview.firebaseio.com",
    projectId: "meeopp-interview",
    storageBucket: "meeopp-interview.appspot.com",
    messagingSenderId: "36017066191"
};

export const rrfConfig = {
    userProfile: "users"
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// const db = firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });
// const app = firebase.initializeApp(config);
// const db = firebase.firestore(app);

// const databaseRef = firebase.database().ref();
// export const formDataRef = databaseRef.child("formData");
// export default db;
