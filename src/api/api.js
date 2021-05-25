import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import firebaseConfig from "../database/firebaseConfig.js";

// passa para o firebaseApp as configurações do firebase;
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Inicia o banco de dados.
const db = firebaseApp.firestore();

// Função que realiza o login no facebook - Abertura do popup
const facebookPopup = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  let result = await firebaseApp.auth().signInWithPopup(provider);
  return result;
};

export default { facebookPopup };
