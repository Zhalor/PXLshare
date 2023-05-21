import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, setDoc, updateDoc, deleteDoc, arrayUnion, arrayRemove, query, where, serverTimestamp } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";

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

async function getFirebaseUserDoc(uid) {
  const q = query(collection(db, 'users'), where('uid', '==', uid));
  const users = await getDocs(q);
  const arr = [];
  users.docs.forEach(user => {
    const obj = user.data();
    arr.push(obj)
  });
  return arr[0];
}

export { db, collection, doc, getDocs, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, storage, ref, uploadBytes, getDownloadURL, deleteObject,
   addDoc, deleteDoc, query, where, serverTimestamp, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,
   onAuthStateChanged, updateProfile, getFirebaseUserDoc }