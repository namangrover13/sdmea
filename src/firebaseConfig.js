import firebase from "firebase";
import "firebase/auth";
import "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDKYmKAx1EM0u-zZVjMV6yNYi1Iqew5njk",
    authDomain: "sdmea-7b557.firebaseapp.com",
    projectId: "sdmea-7b557",
    storageBucket: "sdmea-7b557.appspot.com",
    messagingSenderId: "240351368233",
    appId: "1:240351368233:web:0e9c93cd81c71a80567838",
    measurementId: "G-ESQ1ZJCXWB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();

