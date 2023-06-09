import styled, { keyframes } from "styled-components";
import { ReactComponent as LikeIcon } from '../icons/Like.svg';
import { ReactComponent as CommentIcon } from '../icons/CommentIcon.svg';
import CommentSection from "./CommentSection";

const pulse = keyframes`
  0% {
    background-color: rgb(170, 170, 170);
  }

  50% {
    background-color: rgb(190, 190, 190);
  }

  100% {
    background-color: rgb(170, 170, 170);
  }
`;


const StyledContentCard = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border: 1px solid rgba(114, 114, 114, 0.2);
  background-color: white;
  border-radius: 5px;
  padding-top: 8px;
  margin-bottom: 50px;

  > div:not(:last-child) {
    margin: 0px 0px 8px 20px;
  }
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
  background-color: #b3b3b3;
    animation: ${pulse} 2s linear infinite;
`;

const PostImage = styled.img`
  width: 500px;
  height: 377px;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  margin-bottom: 8px;
  background-color: #b3b3b3;
    animation: ${pulse} 2s linear infinite;
`;

const LoadingBlock = styled.div`
  width: 150px;
  height: 20px;
  background-color: #b3b3b3;
  border-radius: 12px;
  animation: ${pulse} 2s linear infinite;
`;

function LoadingCard() {

  return (
    <StyledContentCard>
      <Container>
        <StyledProfilePicture />
        <LoadingBlock />
      </Container>
      <PostImage />
      <Container>
        <LikeIcon />
        <CommentIcon />
      </Container>
      <LoadingBlock />
      <LoadingBlock />
      <CommentSection />
    </StyledContentCard>
  )
}

export default LoadingCard;