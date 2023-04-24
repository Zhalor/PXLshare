import styled from 'styled-components';
import TestImage from '../cog-outline.png';

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

function ContentCard() {

  return (
   <StyledContentCard>
    <Container>
      <StyledImage src={TestImage} alt="" />
      <h2>Username</h2>
    </Container>
    <PostImage src={TestImage} alt="" />
    <Container>
      <StyledImage src={TestImage} alt="" />
      <StyledImage src={TestImage} alt="" />
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
