import { useState, useEffect, useContext,useCallback } from 'react';
import styled from 'styled-components';
import { storage, ref, uploadBytes, getDownloadURL, deleteObject } from '../firebase';
import { db, doc, getDoc, setDoc, updateDoc, addDoc, collection, deleteDoc } from '../firebase';
import Cropper from 'react-easy-crop';
import { UserContext } from '../RouteSwitch';
import Header from './Header';
import getCroppedImg from '../cropImage';
import  { ReactComponent as UploadIcon } from '../icons/UploadIcon.svg'

const Container = styled.div`
  width: fit-content;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  margin: 50px auto 0px auto;
  padding: 20px;
  background-color: white;

  > div {
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 0px 10px;
  }

  > p {
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  > div > input {
    width: 300px;
  }
`;

const CropperWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 600px;
`;

const UploadBtn = styled.input`
  display: none;
`;

const StyledBtn = styled.button`
  background-color: rgb(0,92,152);
  border: 1px solid rgb(0, 65, 109);
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  font-weight: bold;
  font-size: 0.9rem;

  &:hover {
    background-color: rgb(0, 107, 179)
  }
`;

const StyledUploadIcon = styled(UploadIcon)`
  width: 300px;
  height: 300px;
  margin: 0px 50px 10px 50px;
  display: block;

  &:hover {
    cursor: pointer;
  }
`;

const StyledCroppedImage = styled.img`
  width: 500px;
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
  const [desc, setDesc] = useState('');

  useEffect(() => {
    handleFileChange();
  }, [file]);

  useEffect(() => {
    const zoomSlider = document.querySelector('input[type=range]');
    if(zoomSlider) {
      zoomSlider.value = zoom;
    }
  }, [zoom]);

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
    setCroppedImage(null);
    setFile('');
    setLocalFile('');
    setStage('choose');
    setZoom(1);
    setCrop({x: 0, y: 0});
  }, []);

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
        desc: desc,
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

  return (
    <div>
      <Header user={user} />   
      {stage === 'choose' ? 
        <Container>
          <label>
            <UploadBtn type='file' accept='image/*' id='fileInput' onChange={(e) => setFile(e.target.files[0])} />
            <StyledUploadIcon />
          </label>
          <p>Select an image to upload</p>
        </Container>
        :
        stage === 'crop' ?
        <Container>
          <CropperWrapper>
            <Cropper
              image={localFile}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete} 
            />
          </CropperWrapper>
          <div>
            <StyledBtn onClick={onClose}>Cancel</StyledBtn>
            <input type="range" defaultValue={1} min={1} max={3} step={.1} onChange={(e) => setZoom(e.target.value)} />
            <StyledBtn onClick={showCroppedImage}>Crop</StyledBtn>
          </div>
        </Container>
        :
        stage === 'upload' ?
          <Container>
            <StyledCroppedImage src={croppedImage} />
            <div>
              <StyledBtn onClick={onClose}>Cancel</StyledBtn>
              <textarea name="" id="" cols="30" rows="5" placeholder='Enter a caption...' onChange={(e) => setDesc(e.target.value)}></textarea>
              <StyledBtn type='button' onClick={uploadFile}>Upload</StyledBtn>
            </div>
          </Container>
        :
        null
        }
    </div>
  )
}

export default ImageUploadPage;