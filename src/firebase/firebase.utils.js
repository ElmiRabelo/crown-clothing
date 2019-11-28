import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crown-clothing-db-c73ad.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-c73ad.firebaseio.com",
  projectId: "crown-clothing-db-c73ad",
  storageBucket: "",
  messagingSenderId: "322537233388",
  appId: "1:322537233388:web:3a43844f060c5948"
};

//async function responsavel por criar um documento do user no database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //Coletando o uid do usuario fornecido pelo google Auth e puxando os dados sobre esse documento
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //verifica se existe algum dado criado no database relacionado ao user, se não existir, cria e armazena no database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("erro ao criar usuario", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Configurando google Auth para permitir loguin de usuario usando uma conta google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
