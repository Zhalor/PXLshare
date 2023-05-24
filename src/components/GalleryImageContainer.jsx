import styled from 'styled-components';
import Likes from './Likes';
import { storage, ref, getDownloadURL } from '../firebase';
import { useState } from 'react';
import { useEffect } from 'react';

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  opacity: 0;
  width: 100%;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity .25s;
  transition-timing-function: ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

function GalleryImageContainer(props) {

  useEffect(() => {
    getImageURL();
  }, []);

  const [imageURL, setImageURL] = useState('');

  async function getImageURL() {
    try {
      const path = await getDownloadURL(ref(storage, props.image.url));
      setImageURL(path);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <ImageContainer>
      <Image src={imageURL} />
      <ImageOverlay >
        <Likes likes={props.image.likes} uid={props.uid} docID={props.image.docID} />
      </ImageOverlay>
    </ImageContainer>
  )
}

export default GalleryImageContainer;
