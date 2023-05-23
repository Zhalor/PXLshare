import styled from 'styled-components';
import TestImage from '../cog-outline.png';
import  { ReactComponent as Like } from '../icons/Like.svg'
import CommentIcon from '../icons/CommentIcon';
import { storage, getDownloadURL, ref, db, updateDoc, arrayUnion, arrayRemove, doc, getDoc} from '../firebase';
import { useState, useEffect, useContext } from 'react';
import Likes from './Likes';
import { UserContext } from '../RouteSwitch';
import Comments from './Comments';
import CommentSection from './CommentSection';

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

function ContentCard(props) {

  const [image, setImage] = useState();

  async function getImage() {
    try {
      const path = await getDownloadURL(ref(storage, props.upload.url));
      setImage(path);
    } catch(error) {
      console.log(error);
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
      <Likes likes={props.upload.likes} uid={props.upload.uid} docID={props.upload.docID} />
      <CommentIcon />
    </Container>

    <p>{props.upload.likes.length} {props.upload.likes.length == 1 ? 'Like' : 'Likes '}</p>

    <p>Posted 2 days ago</p>

    <CommentSection upload={props.upload}/>

   </StyledContentCard>
  )
}

export default ContentCard;
