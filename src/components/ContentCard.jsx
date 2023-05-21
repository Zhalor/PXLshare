import styled from 'styled-components';
import TestImage from '../cog-outline.png';
import  { ReactComponent as Like } from '../icons/Like.svg'
import CommentIcon from '../icons/CommentIcon';
import { storage, getDownloadURL, ref, db, updateDoc, arrayUnion, arrayRemove, doc, getDoc} from '../firebase';
import { useState, useEffect, useContext } from 'react';
import Likes from './Likes';
import { UserContext } from '../RouteSwitch';
import Comments from './Comments';

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
  width: 100%;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  margin-bottom: 8px;
`;

const CommentField = styled.div`
  display: flex;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
`;

const CommentInput = styled.input`
  border: none;
  padding: 20px;
  flex: 1;
`;

const PostBtn = styled.button`
  background: white;
  border: none;
  padding: 20px;
`;

function ContentCard(props) {

  const user = useContext(UserContext);
  const [image, setImage] = useState();
  const [comment, setComment] = useState('');

  async function getImage() {
    try {
      const path = await getDownloadURL(ref(storage, props.upload.url));
      setImage(path);
    } catch(error) {
      console.log(error);
    }
  }

  async function addComment() {
    await updateDoc(doc(db, 'users', props.upload.uid, 'Uploads', props.upload.docID), {
      comments: arrayUnion({
        uid: user.uid,
        comment: comment,
        username: user.displayName
      })
    });
    setComment('');
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
      <Likes likes={props.upload.likes} uid={props.upload.uid} docID={props.upload.docID} />
      <CommentIcon />
    </Container>
    <p>{props.upload.likes.length} {props.upload.likes.length == 1 ? 'Like' : 'Likes '}</p>
    <Comments upload={props.upload} />
    <p>Posted 2 days ago</p>
    <CommentField>
      <CommentInput type="text" placeholder='Add a comment...' onChange={(e) => setComment(e.target.value)} value={comment} />
      <PostBtn type='button' onClick={addComment}>Post</PostBtn>
    </CommentField>
   </StyledContentCard>
  )
}

export default ContentCard;
