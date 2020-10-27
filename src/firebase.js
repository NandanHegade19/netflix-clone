import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCnWutAljtsil8zPfyrwOzs3Qrfdb_Y134",
    authDomain: "netflix-clone-6d71e.firebaseapp.com",
    databaseURL: "https://netflix-clone-6d71e.firebaseio.com",
    projectId: "netflix-clone-6d71e",
    storageBucket: "netflix-clone-6d71e.appspot.com",
    messagingSenderId: "709718115782",
    appId: "1:709718115782:web:fcc40b703b1a77f6f51ec7"
});

const db = firebaseApp.firestore();

export {db} ;