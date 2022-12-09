// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCt4HVmTkC-YRnharTbCCVBpoWfsWVK-Xg",
  authDomain: "clone-3ac14.firebaseapp.com",
  projectId: "clone-3ac14",
  storageBucket: "clone-3ac14.appspot.com",
  messagingSenderId: "656507935571",
  appId: "1:656507935571:web:6f452a5a9918ebedb15fa6",
  measurementId: "G-TG7G5B2EDW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };