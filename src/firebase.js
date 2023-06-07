import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, setDoc, updateDoc, deleteDoc, arrayUnion, arrayRemove, query, where, serverTimestamp, Timestamp } from "firebase/firestore"; 
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

async function getFollowers(uid) {
  const userDoc = await getFirebaseUserDoc(uid);
  const followers = [];
  for(let user of userDoc.followers) {
    const followerDoc = await getFirebaseUserDoc(user);
    const profPic = await getDownloadURL(ref(storage, followerDoc.profilePictureURL));
    followers.push({uid: followerDoc.uid, profPic: profPic, username: followerDoc.username});
  }
  return followers;
}

async function getFollowing(uid) {
  const userDoc = await getFirebaseUserDoc(uid);
  const following = [];
  for(let user of userDoc.following) {
    const followingDoc = await getFirebaseUserDoc(user);
    const profPic = await getDownloadURL(ref(storage, followingDoc.profilePictureURL));
    following.push({uid: followingDoc.uid, profPic: profPic, username: followingDoc.username});
  }
  return following;
}

async function getUploads(uid) {
  const userUploads = await getDocs(collection(db, 'users', uid, 'Uploads'));
  const uploads = [];
  for(let upload of userUploads.docs) {
    const imageInfo = upload.data();
    const path = await getDownloadURL(ref(storage, imageInfo.url));
    uploads.push({imageInfo: imageInfo, path: path});
  }
  return uploads;
}

export { db, collection, doc, getDocs, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, storage, ref, uploadBytes, getDownloadURL, deleteObject,
   addDoc, deleteDoc, query, where, serverTimestamp, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,
   onAuthStateChanged, updateProfile, getFirebaseUserDoc, getFollowers, getFollowing, getUploads, Timestamp }