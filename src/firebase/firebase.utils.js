import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDvrv0wWOK3aZlfV5jkemIdlbQKgBBOmJ8",
	authDomain: "crown-clothing-db-c73ad.firebaseapp.com",
	databaseURL: "https://crown-clothing-db-c73ad.firebaseio.com",
	projectId: "crown-clothing-db-c73ad",
	storageBucket: "",
	messagingSenderId: "322537233388",
	appId: "1:322537233388:web:3a43844f060c5948"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
