import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyClLHd-JaalDpbIIkq7OXSppT3EEGupvPk",
  authDomain: "quora-be95b.firebaseapp.com",
  projectId: "quora-be95b",
  storageBucket: "quora-be95b.appspot.com",
  messagingSenderId: "298643354618",
  appId: "1:298643354618:web:ad8ca76d7cb928a47a2a43"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;