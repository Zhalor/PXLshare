import styled from 'styled-components';
import LikesBtn from './LikesBtn';
import { db, doc, updateDoc, arrayRemove, arrayUnion, storage, ref, getDownloadURL } from '../firebase';
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

  useEffect(() => {
    getImageURL();
  }, []);

  const user = useContext(UserContext);
  const [imageURL, setImageURL] = useState('');
  const [likes, setLikes] = useState(props.image.likes);

  async function getImageURL() {
    try {
      const path = await getDownloadURL(ref(storage, props.image.url));
      console.log(path)
      setImageURL(path);
    } catch(error) {
      console.log(error);
    }
  }

  async function toggleLike(isLiked) {
    if(isLiked) {
      await updateDoc(doc(db, 'users', props.uid, 'Uploads', props.image.docID), {
        likes: arrayRemove(user.uid)
      });
      setLikes(likes.filter(item => item !== user.uid));
      
    } else {
      await updateDoc(doc(db, 'users', props.uid, 'Uploads', props.image.docID), {
        likes: arrayUnion(user.uid)
      });
      setLikes([...likes, user.uid]);
    }
  }

  return (
    <ImageContainer>
      <Image src={imageURL} />
      <ImageOverlay >
        <LikesBtn likes={likes} uid={props.uid} docID={props.image.docID} toggleLike={toggleLike} />
        {
          likes ?
            likes.length
          :
            0
        }
      </ImageOverlay>
    </ImageContainer>
  )
}

export default GalleryImageContainer;
