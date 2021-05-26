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
  let results = await db.collection("users").get();
  results.forEach((result) => {
    let data = result.data();
    if (result.id !== userId) {
      list.push({
        id: result.id,
        name: data.name,
        avatar: data.avatar,
      });
    }
  });
  return list;
};

const addNewChat = async (user, contact) => {
  let newChat = await db.collection("chats").add({
    messages: [],
    users: [user.id, contact.id],
  });
  // Pega os dados da collection 'users' , atraves do user.id e faz um update nos chats.
  db.collection("users")
    .doc(user.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        // busca no firestore este valor e une os dados anteriores, com os novos dados.
        chatId: newChat.id,
        title: contact.name,
        image: contact.avatar,
        with: contact.id,
      }),
    });
  db.collection("users")
    .doc(contact.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chatId: newChat.id,
        title: user.name,
        image: user.avatar,
        with: user.id,
      }),
    });
};
// verifica se há novos chats e retorna.
const onChatList = (userId, setChatList) => {
  return db
    .collection("users")
    .doc(userId)
    .onSnapshot((doc) => {
      if (doc.exists) {
        let data = doc.data();
        if (data.chats) {
          setChatList(data.chats);
        }
      }
    });
};

const onChatContent = (chatId, setList) => {
  return db.collection('chats').doc(chatId).onSnapshot((doc) => {
    if(doc.exists){
      let data = doc.data();
      setList(data.messages)
    }
  })
}

export default {
  facebookPopup,
  addUser,
  getContactList,
  addNewChat,
  onChatList,
  onChatContent
};
