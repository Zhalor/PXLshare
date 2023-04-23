import styled from 'styled-components';
import ProfilePicture from '../cog-outline.png';

const StyledContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 800px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  background-color: white;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
`;

const StyledImage = styled.img`
  width: 36px;
  height: 36px;
`;

const PostImage = styled.img`
  width: 100%;
`;

const CommentContainer = styled.div`
  display: flex;
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

function ContentCard() {

  return (
   <StyledContentCard>
    <Container>
      <StyledImage src={ProfilePicture} alt="" />
      <h2>Username</h2>
    </Container>
    <PostImage src={ProfilePicture} alt="" />
    <Container>
      <StyledImage src={ProfilePicture} alt="" />
      <StyledImage src={ProfilePicture} alt="" />
    </Container>
    <p>0 likes</p>
    <h2>Username</h2>
    <p>2 days ago</p>
    <CommentContainer>
      <CommentInput type="text" placeholder='Add a comment...' />
      <PostBtn type='button'>Post</PostBtn>
    </CommentContainer>
   </StyledContentCard>
  )
}

export default ContentCard;
