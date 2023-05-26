import styled from 'styled-components';
import TestImage from '../cog-outline.png';
import CommentIcon from '../icons/CommentIcon';
import { db, doc, updateDoc, arrayRemove, arrayUnion, storage, getDownloadURL, ref} from '../firebase';
import { useState, useEffect, useContext } from 'react';
import Likes from './Likes';
import CommentSection from './CommentSection';
import { UserContext } from '../RouteSwitch';

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

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

const StyledImage = styled.img`
  width: 36px;
  height: 36px;
`;

const PostImage = styled.img`
  width: 500px;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  margin-bottom: 8px;
`;

function ContentCard(props) {

  const user = useContext(UserContext);
  const [image, setImage] = useState();
  const [likes, setLikes] = useState(props.upload.likes);

  async function getImage() {

    try {
      const path = await getDownloadURL(ref(storage, props.upload.url));
      setImage(path);
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

  useEffect(() => {
    getImage();
  }, []);

  return (
   <StyledContentCard>

    <Container>
      <StyledImage src={TestImage} alt="" />
      <h2 onClick={getImage} >{props.upload.username}</h2>
    </Container>

    <PostImage src={image} alt="" />

    <Container>
      <Likes likes={likes} uid={props.upload.uid} docID={props.upload.docID} toggleLike={toggleLike} />
      <CommentIcon />
    </Container>

    <p>{likes.length} {likes.length == 1 ? 'Like' : 'Likes '}</p>

    <p>Posted 2 days ago</p>

    <CommentSection upload={props.upload}/>

   </StyledContentCard>
  )
}

export default ContentCard;
