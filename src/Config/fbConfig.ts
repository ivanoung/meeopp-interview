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
// firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase.initializeApp(config);
