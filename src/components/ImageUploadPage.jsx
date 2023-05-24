import { useState, useEffect, useContext,useCallback } from 'react';
import styled from 'styled-components';
import { storage, ref, uploadBytes, getDownloadURL, deleteObject } from '../firebase';
import { db, doc, getDoc, setDoc, updateDoc, addDoc, collection, deleteDoc } from '../firebase';
import Cropper from 'react-easy-crop';
import { UserContext } from '../RouteSwitch';
import Header from './Header';
import getCroppedImg from '../cropImage';

const CropperWrapper = styled.div`
  position: relative;
  margin: 50px auto;
  width: 700px;
  height: 600px;
`;

const Test = styled.img`
  width: 500px;
`;

function ImageUploadPage() {

  const user = useContext(UserContext);
  const [crop, setCrop] = useState({x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [file, setFile] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [imageDocID, setImageDocID] = useState('');

   const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
    console.log(croppedAreaPixels)
    console.log(croppedArea)
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageURL,
        croppedAreaPixels
      )
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels]);

  const onClose = useCallback(() => {
    setCroppedImage(null)
  }, []);

  useEffect(() => {
    handleFileChange();
  }, [file]);

  async function handleFileChange() {
    if(file) {
      try {
        const storageURL = `${user.uid}/Uploads/${file.name}`;
        const storageRef = ref(storage, storageURL);
        const uploadedFile = await uploadBytes(storageRef, file);

        const docRef = await addDoc(collection(db, 'users', user.uid, 'Uploads'), {
          dateUploaded: new Date(),
          desc: 'An Upload',
          filename: file.name,
          likes: [],
          url: storageURL,
          uid: user.uid,
          username: user.displayName,
          comments: []
        });

        await updateDoc(doc(db, 'users', user.uid, 'Uploads', docRef.id), {
          docID: docRef.id,
        });
        setImageDocID(docRef.id);
        console.log('File has been uploaded', uploadedFile);

        const url = await getDownloadURL(storageRef);
        setImageURL(url);

      } catch(error) {
        console.log(error)
      }
    }
  }

  async function back() {
    try {
      const storageURL = `${user.uid}/Uploads/${file.name}`;
      const storageRef = ref(storage, storageURL);
      await deleteObject(storageRef);

      await deleteDoc(doc(db, 'users', user.uid, 'Uploads', imageDocID));
    } catch(error) {
      console.log(error);
    }
    setFile('');
  }

  async function uploadFile() {
    try {
      const storageURL = `${user.uid}/uploads/${file.name}`;
      const storageRef = ref(storage, storageURL);
  
      const uploadedFile = await uploadBytes(storageRef, file);
      console.log('File has been uploaded', uploadedFile);
    } catch(error) {
      console.log(error)
    }
  }

  async function uploadFile() {
    try {  
      await setDoc(doc(db, user.uid, 'Uploads', file.name, 'Info'), {
        desc: 'This is an upload',
        url: storageURL
      });
  
      const names = await getDoc(doc(db, user.uid, 'Uploads'));
      const obj = names.data();
      console.log(obj.filenames);
      await updateDoc(doc(db, user.uid, 'Uploads'), {
        filenames: {
          ...obj.filenames, 
          [user.uid]: file.name
        },
      });
    } catch(error) {
      console.log(error)
    }
  }

  async function getUserInfo() {
    console.log(user);
    console.log(file);
  }

  return (
    <div>
      <Header user={user} />
      {file ? 
        <CropperWrapper>
          <Cropper
            image={imageURL}
            crop={crop}
            zoom={zoom}
            cropSize={{width: 500, height: 500}}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete} 
          />
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
        <button onClick={showCroppedImage}>Show Cropped Image</button>
        {croppedImage ? <Test src={croppedImage} /> : null}
        
    </div>
  )
}

export default ImageUploadPage;
