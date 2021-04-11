import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAPBv8buKjSJbbCBed3mqzKmWtLrA28f8A",
  authDomain: "react-course-crwn-clothing.firebaseapp.com",
  projectId: "react-course-crwn-clothing",
  storageBucket: "react-course-crwn-clothing.appspot.com",
  messagingSenderId: "560221163842",
  appId: "1:560221163842:web:f0a6d3626637947fc4b8db",
  measurementId: "G-FW2K6P9DLX"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
