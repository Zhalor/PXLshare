import { useState, useEffect, useContext,useCallback } from 'react';
import styled from 'styled-components';
import { storage, ref, uploadBytes, getDownloadURL, deleteObject } from '../firebase';
import { db, doc, getDoc, setDoc, updateDoc, addDoc, collection, deleteDoc } from '../firebase';
import Cropper from 'react-easy-crop';
import { UserContext } from '../RouteSwitch';
import Header from './Header';
import getCroppedImg from '../cropImage';
import  { ReactComponent as UploadIcon } from '../icons/UploadIcon.svg'

const CropperWrapper = styled.div`
  position: relative;
  margin: 50px auto;
  padding: 20px;
  width: 700px;
  height: 600px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const UploadBtn = styled.input`
  display: block;
  margin: 150px auto;
  padding: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const StyledUploadIcon = styled(UploadIcon)`
  width: 300px;
  height: 300px;
`;

const Test = styled.img`
  width: 500px;
  display: block;
  margin: 100px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

function ImageUploadPage() {

  const user = useContext(UserContext);
  const [crop, setCrop] = useState({x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [file, setFile] = useState('');
  const [localFile, setLocalFile] = useState('');
  const [stage, setStage] = useState('choose');
  const [imageURL, setImageURL] = useState('');
  const [imageDocID, setImageDocID] = useState('');

   const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        localFile,
        croppedAreaPixels
      )
      console.log('done', { croppedImage })
      setCroppedImage(croppedImage);
      setStage('upload');
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
      let reader = new FileReader();
      reader.readAsDataURL(file);
      setStage('crop');
      reader.onload = function() {
        setLocalFile(reader.result);
      }

      reader.onerror = function() {
        console.log(reader.error)
      }
    }
  }

  async function uploadFile() {
    try {
      const storageURL = `${user.uid}/Uploads/${file.name}`;
      const storageRef = ref(storage, storageURL);
      const data = await fetch(croppedImage);
      const blob = await data.blob();
      const fileType = blob.type;
      const testFile = new File([blob], file.name, { type: fileType });
      const uploadedFile = await uploadBytes(storageRef, blob);

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

      console.log('File has been uploaded', uploadedFile);
    } catch(error) {
      console.log(error)
    }
  }

  async function back() {
    setFile('');
    setCroppedImage('');
    setLocalFile('');
    setStage('choose');
  }

  async function getUserInfo() {
    console.log(user);
    console.log(file);
    console.log(croppedImage)
  }

  return (
    <div>
      <Header user={user} />   
      {stage === 'choose' ? 
        <div>
          <UploadBtn type='file' accept='image/*' id='fileInput' onChange={(e) => setFile(e.target.files[0])} />
        </div>
        :
        stage === 'crop' ?
        <CropperWrapper>
          <Cropper
            image={localFile}
            crop={crop}
            zoom={zoom}
            cropSize={{width: 500, height: 500}}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete} 
          />
        </CropperWrapper>
        :
        stage === 'upload' ?
          <Test src={croppedImage} />
        :
        null
        }
        <button type='button' onClick={uploadFile}>Upload</button>
        <button type='button' onClick={getUserInfo}>Get user info</button>
        <button onClick={back}>back</button>
        <input type="range" defaultValue={1} min={1} max={3} step={.1} onChange={(e) => setZoom(e.target.value)} />
        <button onClick={showCroppedImage}>Show Cropped Image</button>
    </div>
  )
}

export default ImageUploadPage;