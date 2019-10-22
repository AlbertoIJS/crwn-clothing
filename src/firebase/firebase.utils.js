import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGpJxu0x1TDUag4wG7KVskLR8MDpiQaKg",
    authDomain: "crwn-db-29816.firebaseapp.com",
    databaseURL: "https://crwn-db-29816.firebaseio.com",
    projectId: "crwn-db-29816",
    storageBucket: "crwn-db-29816.appspot.com",
    messagingSenderId: "615767021262",
    appId: "1:615767021262:web:73bda280850e76e68f229f",
    measurementId: "G-0D6N9P6VWW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
