import styled from 'styled-components';
import TestImage from '../cog-outline.png';
import LikedIcon from '../icons/LikedIcon';
import  { ReactComponent as LikeIcon } from '../icons/LikeIcon.svg'
import CommentIcon from '../icons/CommentIcon';
import { getAuth, storage, getDownloadURL, ref } from '../firebase';
import { useState } from 'react';
import { useEffect } from 'react';

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

const StyledLikeIcon = styled(LikeIcon)`
  transition: fill .5s;

  &:hover {
    fill: red;
    cursor: pointer;
  }
`;

const CommentContainer = styled.div`
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

  const auth = getAuth();
  const [username, setUsername] = useState(Object.values(props.upload));
  const [imageURL, setImageURL] = useState();

  async function getImageURL() {
    try {
      const path = await getDownloadURL(ref(storage, `${username}/uploads/${Object.keys(props.upload)}`));
      console.log(path);
      setImageURL(path);
    } catch(error) {
      
    }
  }

  useEffect(() => {
    getImageURL();
  }, []);

  return (
   <StyledContentCard>
    <Container>
      <StyledImage src={TestImage} alt="" />
      <h2 onClick={getImageURL} >{username}</h2>
    </Container>
    <PostImage src={imageURL} alt="" />
    <Container>
      <StyledLikeIcon />
      <CommentIcon />
    </Container>
    <p>0 likes</p>
    <h2>{username}</h2>
    <p>2 days ago</p>
    <CommentContainer>
      <CommentInput type="text" placeholder='Add a comment...' />
      <PostBtn type='button'>Post</PostBtn>
    </CommentContainer>
   </StyledContentCard>
  )
}

export default ContentCard;
