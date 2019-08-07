import firebase from 'firebase/app';
import 'firebase/database';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQep-QKgELoRXuSt17N1-lFy1TLd4hy_g",
    authDomain: "comments-539aa.firebaseapp.com",
    databaseURL: "https://comments-539aa.firebaseio.com",
    projectId: "comments-539aa",
    storageBucket: "",
    messagingSenderId: "86920923839",
    appId: "1:86920923839:web:8c9626ac128241d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const database = firebase.database();
