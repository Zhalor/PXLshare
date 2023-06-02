import styled from 'styled-components';
import LikesBtn from './LikesBtn';
import { db, doc, updateDoc, arrayRemove, arrayUnion} from '../firebase';
import { useState, useEffect,useContext} from 'react';
import { UserContext } from '../RouteSwitch';

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

  // useEffect(() => {
  //   setLikes(props.image.imageInfo.likes);
  // }, [props.image]);

  // async function toggleLike(isLiked) {
  //   if(isLiked) {
  //     await updateDoc(doc(db, 'users', props.image.imageInfo.uid, 'Uploads', props.image.imageInfo.docID), {
  //       likes: arrayRemove(user.uid)
  //     });
  //     setLikes(likes.filter(item => item !== user.uid));
      
  //   } else {
  //     await updateDoc(doc(db, 'users', props.image.imageInfo.uid, 'Uploads', props.image.imageInfo.docID), {
  //       likes: arrayUnion(user.uid)
  //     });
  //     setLikes([...likes, user.uid]);
  //   }
  // }



  return (
    <ImageContainer>
      <Image src={props.image.path} />
      <ImageOverlay>
        <LikesBtn likes={props.image.imageInfo.likes} image={props.image.imageInfo} toggleLike={props.toggleLike} />
        {
          props.image.imageInfo.likes ?
            props.image.imageInfo.likes.length
          :
            0
        }
      </ImageOverlay>
    </ImageContainer>
  )
}

export default GalleryImageContainer;
