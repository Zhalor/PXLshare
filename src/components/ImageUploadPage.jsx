import styled from 'styled-components';
import { storage, ref, uploadBytes } from '../firebase';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from '../firebase';

function ImageUploadPage() {

  const [file, setFile] = useState('');

  async function uploadFile() {
    console.log(file, file.name);
    const auth = getAuth();
    const storageRef = ref(storage, `${auth.currentUser.displayName}/uploads/${file.name}`);

    const uploadedFile = await uploadBytes(storageRef, file);
    console.log('File has been uploaded', uploadedFile);
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
