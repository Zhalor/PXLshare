import styled from 'styled-components';
import LikesBtn from './LikesBtn';
import { Link } from 'react-router-dom';

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const LikeContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  display: inline-block;
`;

const StyledLink = styled(Link)`
  width: 300px;
  height: 300px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity .25s;
  transition-timing-function: ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

function GalleryImageContainer(props) {

  return (
    <ImageContainer>
      <Image src={props.image.path} />
        <Overlay>
          <StyledLink to={`/post/${props.image.imageInfo.docID}`} state={{upload: props.image.imageInfo, image: props.image.path, profilePicture: props.profilePicture, postLikes: props.image.imageInfo.likes}}>
          </StyledLink>
          <LikeContainer>
            <LikesBtn likes={props.image.imageInfo.likes} image={props.image.imageInfo} toggleLike={props.toggleLike} />
              {
                props.image.imageInfo.likes ?
                  props.image.imageInfo.likes.length
                :
                  0
              }
          </LikeContainer>
        </Overlay>
    </ImageContainer>
  )
}

export default GalleryImageContainer;
