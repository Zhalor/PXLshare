import styled from 'styled-components';
import {ReactComponent as CommentIcon} from '../icons/CommentIcon.svg';
import { db, doc, updateDoc, arrayRemove, arrayUnion, storage, getDownloadURL, ref, getDoc} from '../firebase';
import { useState, useEffect, useContext, useRef } from 'react';
import LikesBtn from './LikesBtn';
import CommentSection from './CommentSection';
import { UserContext } from '../RouteSwitch';
import { Link } from 'react-router-dom';

const StyledContentCard = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border: 1px solid rgba(114, 114, 114, 0.2);
  background-color: white;
  border-radius: 5px;
  padding-top: 8px;
  margin-bottom: 50px;

  > div:not(:last-child), > h2, > p {
    padding: 0px 0px 8px 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

const StyledProfilePicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const PostImage = styled.img`
  width: 500px;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  margin-bottom: 8px;
`;

const Caption = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
`

function ContentCard(props) {

  const user = useContext(UserContext);
  const inputRef = useRef(null)
  const [image, setImage] = useState();
  const [likes, setLikes] = useState(props.upload.likes);
  const [profilePicture, setProfilePicture] = useState();

   useEffect(() => {
    getImage();
    getPorfilePicture();
  }, []);

  async function getImage() {
    try {
      const imgPath = await getDownloadURL(ref(storage, props.upload.url));
      setImage(imgPath);
    } catch(error) {
      console.log(error);
    }
  }

  async function getPorfilePicture() {
    try {
      const userDoc = await getDoc(doc(db, 'users', props.upload.uid));
      const URL = userDoc.data().profilePictureURL;
      const profilePicturePath = await getDownloadURL(ref(storage, URL));
      setProfilePicture(profilePicturePath)
    } catch(error) {
      console.log(error);
    }
  }

  async function toggleLike(isLiked) {
    if(isLiked) {
      await updateDoc(doc(db, 'users', props.upload.uid, 'Uploads', props.upload.docID), {
        likes: arrayRemove(user.uid)
      });
      setLikes(likes.filter(item => item !== user.uid));
      
    } else {
      await updateDoc(doc(db, 'users', props.upload.uid, 'Uploads', props.upload.docID), {
        likes: arrayUnion(user.uid)
      });
      setLikes([...likes, user.uid]);
    }
  }

  function handleClick() {
    inputRef.current.focus();
  }

  return (
   <StyledContentCard>

    <Container>
      <StyledProfilePicture src={profilePicture} alt="" />
      <StyledLink to={`/p/${props.upload.username}`} state={{uid: props.upload.uid}}><h2>{props.upload.username}</h2></StyledLink>
    </Container>
    <PostImage src={image} alt={`Image uploaded by ${props.upload.username}`} />
    <Container>
      <LikesBtn likes={likes} image={props.upload} toggleLike={toggleLike} />
      <CommentIcon onClick={handleClick} />
    </Container>
    <Caption>{props.upload.desc}</Caption>
    <p>{likes.length} {likes.length == 1 ? 'Like' : 'Likes '}</p>
    <p>Posted 2 days ago</p>
    <CommentSection upload={props.upload} inputRef={inputRef} />
   </StyledContentCard>
  )
}

export default ContentCard;
