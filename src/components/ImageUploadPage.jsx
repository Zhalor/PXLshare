import styled from 'styled-components';
import { storage, ref, uploadBytes } from '../firebase';
import { useState } from 'react';
import { getAuth, onAuthStateChanged, db, collection, doc, getDocs, getDoc, setDoc, updateDoc } from '../firebase';

function ImageUploadPage() {

  const [file, setFile] = useState('');

  async function uploadFile() {
    try {
      console.log(file, file.name);
      const auth = getAuth();
      const storageURL = `${auth.currentUser.displayName}/uploads/${file.name}`;
      const storageRef = ref(storage, storageURL);
  
      const uploadedFile = await uploadBytes(storageRef, file);
      console.log('File has been uploaded', uploadedFile);
  
      await setDoc(doc(db, auth.currentUser.displayName, 'Uploads', file.name, 'Info'), {
        desc: 'This is an upload',
        url: storageURL
      });
  
      const names = await getDoc(doc(db, auth.currentUser.displayName, 'Uploads'));
      const obj = names.data();
      console.log(obj.filenames);
      await updateDoc(doc(db, auth.currentUser.displayName, 'Uploads'), {
        filenames: {
          ...obj.filenames, 
          [file.name]: auth.currentUser.displayName
        },
      });
    } catch(error) {
      console.log(error)
    }
  }

  async function getUserInfo() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(auth.currentUser);
      } else {
        console.log('not ready');
      }
    });
  }

  return (
    <div>
      <input type='file' accept='image/*' id='fileInput' onChange={(e) => setFile(e.target.files[0])}/>
      <button type='button' onClick={uploadFile}>Upload</button>
      <button type='button' onClick={getUserInfo}>Get user info</button>
    </div>
  )
}

export default ImageUploadPage;
