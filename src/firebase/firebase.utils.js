import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcC4mYoIqgFGBzDuoZ5Ka5l-SROejLS9w",
  authDomain: "clothing-store-db-710ce.firebaseapp.com",
  databaseURL: "https://clothing-store-db-710ce.firebaseio.com",
  projectId: "clothing-store-db-710ce",
  storageBucket: "clothing-store-db-710ce.appspot.com",
  messagingSenderId: "381295942872",
  appId: "1:381295942872:web:1f2f58ff302e6d67140bad",
  measurementId: "G-JT65DB78QF",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
