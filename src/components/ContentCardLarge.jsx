import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import CommentSection from './CommentSection';
import LikesBtn from './LikesBtn';
import { useEffect, useContext, useState, useRef } from 'react';
import { UserContext } from '../RouteSwitch';
import { Link, useLocation } from 'react-router-dom';
import {ReactComponent as CommentIcon} from '../icons/CommentIcon.svg';

const PostContainer = styled.div`
  display: flex;
  margin: 50px auto 0px auto;
  width: 1200px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
`;

const ImageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;

  > *:not(:last-child) {
    padding: 10px;
  }
`

const StyledProfilePicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const StyledImage = styled.img`
  width: 700px;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  flex-shrink: 0;
`;

const Caption = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
`


function Content() {

  const user = useContext(UserContext);
  const inputRef = useRef(null)
  const { upload, image, profilePicture, likes } = useLocation().state;
  const currentDate = new Date().getTime();
  const dateUploaded = upload.dateUploaded.seconds;
  const UploadToCurrentDateDifference = Math.trunc((currentDate/1000/60/60/24) - (dateUploaded/60/60/24));
  

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <Header />
      <PostContainer>
        <StyledImage src={image} />
          <ImageInfoContainer>
            <Container>
              <StyledProfilePicture src={profilePicture} />
              <StyledLink to={`/p/${upload.username}`} state={{uid: upload.uid}}><h2>{upload.username}</h2></StyledLink>
            </Container>
            {upload.desc ? <Caption>{upload.desc}</Caption> : null}
            <Container>
              <LikesBtn likes={likes} image={upload} />
              <CommentIcon onClick={handleClick} />
            </Container>
            <p>{likes.length} {likes.length == 1 ? 'Like' : 'Likes '}</p>
            <p>Uploaded {UploadToCurrentDateDifference > 0 ? `${UploadToCurrentDateDifference} days ago` : 'today'}</p>
            <CommentSection upload={upload} inputRef={inputRef} />
          </ImageInfoContainer>
      </PostContainer>
      <Footer footerStyle={{position: 'absolute'}} />
    </>
  )
}

export default Content;
