import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, setDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx8CXtDPdBDt8nbrBB3HzmE4_r7v93TLg",
  authDomain: "pxlshare-1fa05.firebaseapp.com",
  projectId: "pxlshare-1fa05",
  storageBucket: "pxlshare-1fa05.appspot.com",
  messagingSenderId: "927873406502",
  appId: "1:927873406502:web:c58724e56b04dc3ffdf8e7",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, collection, doc, getDocs, getDoc, setDoc, storage, ref, uploadBytes }