import styled from 'styled-components';
import { storage, ref, uploadBytes } from '../firebase';
import { useState } from 'react';
function ImageUploadPage() {

  const [file, setFile] = useState('');

  async function uploadFile() {
    console.log(file);
    const storageRef = ref(storage, 'testUser/uploads/testImage');

    const uploadedFile = await uploadBytes(storageRef, file);
    console.log('File has been uploaded', uploadedFile);
  }

  return (
    <div>
      <input type='file' accept='image/*' id='fileInput' onChange={(e) => setFile(e.target.files[0])}/>
      <button type='button' onClick={uploadFile}>Upload</button>
    </div>
  )
}

export default ImageUploadPage;
