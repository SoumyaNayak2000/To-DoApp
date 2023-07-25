
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB8hsONsLnXDIUETHDkUXiXzcmMuMyoXDM",
  authDomain: "to-do-8091b.firebaseapp.com",
  projectId: "to-do-8091b",
  storageBucket: "to-do-8091b.appspot.com",
  messagingSenderId: "566642677883",
  appId: "1:566642677883:web:7aa656788005b2acc52ade"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db =getFirestore(app)