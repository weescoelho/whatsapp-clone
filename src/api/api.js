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

const addUser = async (user) => {
  await db.collection("users").doc(user.id).set(
    {
      name: user.name,
      avatar: user.avatar,
    },
    { merge: true },
  );
};

const getContactList = async (userId) => {
  let list = [];
  let results = await db.collection('users').get();
  results.forEach(result => {
    let data = result.data();
    if(result.id !== userId){
      list.push({
        id: result.id,
        name:data.name,
        avatar:data.avatar
      })
    }
  })
  return list;
}

export default { facebookPopup, addUser };
