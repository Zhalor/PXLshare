import styled from 'styled-components';
import { storage, ref, uploadBytes, getDownloadURL, deleteObject } from '../firebase';
import { useState } from 'react';
import { getAuth, onAuthStateChanged, db, doc, getDoc, setDoc, updateDoc } from '../firebase';
import Cropper from 'react-easy-crop';
import { useEffect } from 'react';
import Header from './Header';

const CropperWrapper = styled.div`
  position: relative;
  margin: 50px auto;
  width: 900px;
  height: 600px;
`;

function ImageUploadPage(props) {

  const [crop, setCrop] = useState({x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const [file, setFile] = useState('');
  const [imageURL, setImageURL] = useState('');
  const auth = getAuth();

  useEffect(() => {
    handleFileChange();
  }, [file]);

  async function handleFileChange() {
    if(file) {
      try {
        const storageURL = `${auth.currentUser.displayName}/uploads/${file.name}`;
        const storageRef = ref(storage, storageURL);
    
        const uploadedFile = await uploadBytes(storageRef, file);
        console.log('File has been uploaded', uploadedFile);
        const url = await getDownloadURL(storageRef);
        setImageURL(url);
        console.log(imageURL, url);
      } catch(error) {
        console.log(error)
      }
    }
  }

  async function back() {
    setFile('');
    try {
      const storageURL = `${auth.currentUser.displayName}/uploads/${file.name}`;
      const storageRef = ref(storage, storageURL);
      await deleteObject(storageRef);
    } catch(error) {
      console.log(error);
    }
  }

  async function uploadFile() {
    try {
      const storageURL = `${auth.currentUser.displayName}/uploads/${file.name}`;
      const storageRef = ref(storage, storageURL);
  
      const uploadedFile = await uploadBytes(storageRef, file);
      console.log('File has been uploaded', uploadedFile);
    } catch(error) {
      console.log(error)
    }
  }

  async function uploadFile() {
    try {  
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
    console.log(file, file.name);
    console.log(zoom);
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
      <Header user={props.user} />
      {file ? 
        <CropperWrapper>
          <Cropper
            image={imageURL}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onZoomChange={setZoom} />
        </CropperWrapper>
          : 
        <div>
          <input type='file' accept='image/*' id='fileInput' onChange={(e) => setFile(e.target.files[0])}/>
          <button type='button' onClick={uploadFile}>Upload</button>
          <button type='button' onClick={getUserInfo}>Get user info</button>
        </div>}
        <button type='button' onClick={getUserInfo}>Get user info</button>
        <button onClick={back}>back</button>
        <input type="range" defaultValue={1} min={1} max={3} step={.1} onChange={(e) => setZoom(e.target.value)} />
    </div>
  )
}

export default ImageUploadPage;
