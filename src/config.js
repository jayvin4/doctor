import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import "firebase/compat/database";
import firebase from "firebase/compat/app"

const firebaseConfig = {
  apiKey: "AIzaSyAKwhY1JHkf9vNS3Ya4nqRShMcE7fgSHkM",
  authDomain: "patient-auth-3c69e.firebaseapp.com",
  databaseURL: "https://patient-auth-3c69e-default-rtdb.firebaseio.com",
  projectId: "patient-auth-3c69e",
  storageBucket: "patient-auth-3c69e.appspot.com",
  messagingSenderId: "359855247646",
  appId: "1:359855247646:web:d9ba2711c0d150d287790f",
  measurementId: "G-M7PZ2T42PF"
};

export const app = initializeApp(firebaseConfig);
 const fireDb = firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();
//export const auth = getAuth(app);